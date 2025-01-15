import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './../Pages/Home';
import About from './../Pages/About';
import Category from './../Pages/Category';
import ProductDetail from './../Pages/ProductDetail';
import NotFound from './../Pages/NotFound';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/:url" element={<Category />} />
            <Route path="/product" element={<ProductDetail />} />
            <Route path="/404" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;