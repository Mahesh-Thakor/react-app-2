import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    function redirectToHome(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        navigate('/');
    }
    
    return (
        <section className="bg-primary-600 dark:bg-gray-900 h-screen flex items-center justify-center">
            <div className="text-center">
                <img src="https://hianime.to/images/404.png?v=0.2" alt="404 Error" className="mx-auto mb-8 h-40 w-40" />
                <h1 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">404 Error</h1>
                <p className="mb-4 text-xl font-light text-gray-500 dark:text-gray-400">Oops! We can't find this page.</p>
                <div className="c4-button">
                    <a onClick={redirectToHome} href="/home" className="btn btn-radius btn-focus inline-flex items-center text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900">
                        <i className="fa fa-chevron-circle-left mr-2"></i>Back to homepage
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NotFound;