import React from 'react';
import ThemeToggle from '../theme/ThemeToggle';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import CartHeader from './CartHeader';
import UserHeader from './UserHeader';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 bg-white dark:bg-gray-900 shadow-md pt-4 px-6 z-50">
            <div className="flex justify-between items-center">               
                <Link to="/" className="text-xl font-bold text-gray-800 dark:text-gray-200">React App</Link>
                <div className="flex items-center space-x-4">
                    <ThemeToggle />
                    <CartHeader />
                    <UserHeader />
                    <input type="text" placeholder="Search..." className="px-4 py-2 w-64 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
            </div>
            <Menu />
        </header>
    );
};

export default Header;