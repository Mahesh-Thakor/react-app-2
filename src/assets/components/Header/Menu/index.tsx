import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { supabase } from './../../../../Client/supabaseClient';
import { setCategories, setCurrentCategory } from './../../../../features/category/categorySlice';

const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.category.categories);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenuItems = async () => {
      const { data: categories, error: categoryError } = await supabase
        .from('category')
        .select('*')
        .eq('is_active', true)
        .eq('do_not_search', false)
        .limit(10);

      if (categoryError) {
        console.error('Error fetching categories:', categoryError);
        return;
      }

      const { data: urlRewrites, error: urlRewriteError } = await supabase
        .from('sys_url_rewrite')
        .select('*')
        .eq('type', 1);

      if (urlRewriteError) {
        console.error('Error fetching URL rewrites:', urlRewriteError);
        return;
      }

      const combinedData = categories.map(category => {
        const relevantUrlRewrite = urlRewrites.find(
          (rewrite: any) => rewrite.target_id === category.category_id
        );
        return {
          ...category,
          sys_url_rewrite: relevantUrlRewrite ? relevantUrlRewrite.target_url : null,
        };
      });

      dispatch(setCategories(combinedData));
    };

    fetchMenuItems();
  }, [dispatch]);

  const handleClick = (item: any) => {
    dispatch(setCurrentCategory(item));
    navigate(`/category/${item.sys_url_rewrite}`);
  };

  return (
    <nav>
      <ul className="flex space-x-4">
        {categories.map((item: any, index: number) => (
          <li key={index} onClick={() => handleClick(item)} className="relative group">
            <div className="cursor-pointer mt-4 pb-2">              
              <Link to="#" className="no-underline text-black dark:text-white">
                {item.category_name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;