import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

interface CategoryState {
  currentCategory: Category | null;
  categories: Category[];
}

const initialState: CategoryState = {
  currentCategory: null,
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setCurrentCategory: (state, action: PayloadAction<Category>) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { setCategories, setCurrentCategory } = categorySlice.actions;

export default categorySlice.reducer;