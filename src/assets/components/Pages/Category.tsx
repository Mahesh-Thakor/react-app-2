import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './../../../store';
import { supabase } from './../../../Client/supabaseClient';

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
          console.error('Error fetching sys_url_rewrite:', urlError);
          setLoading(false);
          return;
        }

        // Fetch the category data
        const { data: fetchedCategory, error: categoryError } = await supabase
          .from('category')
          .select('*')
          .eq('category_id', urlData.target_id)
          .single();

        if (categoryError || !fetchedCategory) {
          console.error('Error fetching category:', categoryError);
          setLoading(false);
          return;
        }

        setCategory(fetchedCategory);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if(currentCategory){
      setCategory(currentCategory);
    }else{
      fetchURLAndCategory();
    }

  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!category) {
    return <div>Category not found</div>;
  }

  return <h1>Category: {category.category_name}</h1>;
};

export default Category;