import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './../../../store';
import { supabase } from './../../../Client/supabaseClient';
import Loader from './../../components/Common/Loader';
import ProductCard from './ProductCard';

interface Category {
  active_from: Date | null;
  active_to: Date | null;
  category_id: number;
  category_name: string | null;
  category_title: string | null;
  do_not_search: boolean;
  is_active: boolean;
  meta_description: string | null;
  meta_keywords: string | null;
  modified_on: Date | null;
  page_title: string | null;
  parent_id: number | null;
  seo_text: string | null;
  sort_order: number;
  sys_url_rewrite: string | null;
}

const Category: React.FC = () => {
  const navigate = useNavigate();
  const { url } = useParams<{ url: string }>();
  const currentCategory = useSelector((state: RootState) => state.category.currentCategory);
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchURLAndCategory = async () => {
      setLoading(true);
      try {
        // Fetch the URL rewrite data
        const { data: urlData, error: urlError } = await supabase
          .from('sys_url_rewrite')
          .select('*')
          .eq('target_url', url)
          .single();

        if (urlError || !urlData) {
          setLoading(false);
          navigate('/404');
          return;
        }

        const { data: fetchedCategory, error: categoryError } = await supabase
          .from('category')
          .select('*')
          .eq('category_id', urlData.target_id)
          .single();

        if (categoryError || !fetchedCategory) {
          console.error('Error fetching category:', categoryError);
          setLoading(false);
          navigate('/404');
          return;
        }

        setCategory(fetchedCategory);
      } catch (error) {
        console.log(error);
        setLoading(false);
        navigate('/404');
      } finally {
        setLoading(false);
      }
    };

    if (currentCategory) {
      setCategory(currentCategory);
      setLoading(false);
    } else {
      fetchURLAndCategory();
    }
  }, [url, navigate, currentCategory]);

  if (loading) {
    return <Loader />;
  }

  if (category) {
    return <>
      <h1>Category: {category.category_name}</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full justify-center'>
      {Array.from({ length: 8 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </>;
  }

};

export default Category;