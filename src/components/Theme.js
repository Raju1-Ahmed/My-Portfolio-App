import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

export const Theme = ({ children }) => {
    const [theme, setTheme] = useState(null);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <ThemeContext.Provider value={{ theme, handleThemeSwitch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default Theme;