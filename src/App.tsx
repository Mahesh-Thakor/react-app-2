import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './assets/components/theme/ThemeContext';
import Header from './assets/components/Header';
import AppRoutes from './assets/components/Routes';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
                <Router>
                    <Header />
                    <main className="p-6">
                        <AppRoutes />
                    </main>
                </Router>
            </div>
        </ThemeProvider>
    );
};

export default App;