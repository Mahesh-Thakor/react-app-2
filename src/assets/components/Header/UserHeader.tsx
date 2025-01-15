import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const UserHeader: React.FC = () => {
    const [isAccountSectionVisible, setIsAccountSectionVisible] = useState<boolean>(false);
    const navigate = useNavigate();

    function toggleAccountSection(event: React.MouseEvent) {
        event.preventDefault();
        setIsAccountSectionVisible(!isAccountSectionVisible);
    }
    function accountAction(event: React.MouseEvent) {
        event.preventDefault();
        navigate('/');
    }

    return (
        <>
            <button id="userDropdownButton1" onClick={toggleAccountSection} data-dropdown-toggle="myAccount" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
                <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>Account
                <svg className="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                </svg>
            </button>
            <div id="myAccount" className={`fixed top-16 right-4 z-10 w-1/2 max-w-sm overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800 transition-transform duration-300 ${isAccountSectionVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                    <li><a href="" onClick={accountAction} title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">My Account</a></li>
                    <li><a href="" onClick={accountAction} title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">My Orders</a></li>
                    <li><a href="" onClick={accountAction} title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Settings</a></li>
                    <li><a href="" onClick={accountAction} title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Favourites</a></li>
                    <li><a href="" onClick={accountAction} title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Addresses</a></li>                                  
                </ul>

                <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
                    <a href="" onClick={accountAction} title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Sign Out</a>
                </div>
            </div>
        </>
    );
};

export default UserHeader;