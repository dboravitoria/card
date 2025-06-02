import { useState, useEffect } from 'react';

export function Toggle() {

    const [isDarkMode, setIsDarkMode] = useState(() => {
         return document.documentElement.classList.contains('dark')
    });
    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };
     useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);
    return (
        <div className="flex items-center justify-center h-16 mb-8">
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isDarkMode}
                    onChange={handleToggle}
                />
                <div className="
                w-11 h-6 bg-secondary shadow-custom drop-shadow-sm
                peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-white transition-colors duration-200 ease-in-out
                after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white dark:after:bg-secondary after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                peer-checked:after:translate-x-full peer-checked:after:border-white
                "></div>
                <span className="ml-3 text-sm font-medium text-secondary dark:text-white">
                    {isDarkMode ? 'Tema Escuro:🌙' : 'Tema Claro:☀️'}
                </span>
            </label>
        </div>
    );
}