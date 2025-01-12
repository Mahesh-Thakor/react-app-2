import { useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('ThemeToggle must be used within a ThemeProvider');
    }

    const { theme, toggleTheme } = themeContext;

    useEffect(() => {
        const checkbox = document.getElementById('toggle') as HTMLInputElement;
        if (checkbox) {
            const toggleTrack = checkbox.nextElementSibling as HTMLElement;
            const toggleDot = toggleTrack?.querySelector('.dot') as HTMLElement;
            const icon = toggleDot?.querySelector('.icon') as HTMLElement;
            toggleTrack?.classList.remove('shadow-neumorphic-toggle-inset', 'shadow-neumorphic-toggle-outset', 'bg-blue-500');
            toggleDot?.classList.remove('translate-x-6');
            icon?.classList.remove('fa-sun', 'text-yellow-500', 'fa-moon', 'text-blue-500');

            if (theme === 'dark') {
                checkbox.checked = true;
                toggleTrack?.classList.add('bg-blue-500', 'shadow-neumorphic-toggle-inset');
                toggleDot?.classList.add('translate-x-6');
                icon?.classList.add('fa-moon', 'text-blue-500');
            } else {
                checkbox.checked = false;
                toggleTrack?.classList.add('shadow-neumorphic-toggle-outset');
                icon?.classList.add('fa-sun', 'text-yellow-500');
            }
        }
    }, [theme]);

    const handleToggle = () => {
        toggleTheme();
    };

    return (
        <div className="flex items-center">
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input
                        type="checkbox"
                        id="toggle"
                        className="sr-only"
                        onChange={handleToggle}
                    />
                    <div className="block bg-gray-300 dark:bg-blue-700 w-14 h-8 rounded-full shadow-neumorphic-toggle-outset transition-all duration-300 ease-in-out relative">
                        <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out flex items-center justify-center">
                            <i className="icon fas transition-opacity duration-[500ms] ease-in-out"></i>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default ThemeToggle;