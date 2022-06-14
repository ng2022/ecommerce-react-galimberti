import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [darkTheme, setDarkTheme] = useState(false);

    const handleTheme = () => {
        setDarkTheme(!darkTheme);
    }

    const dataTheme = {
        darkTheme,
        handleTheme
    }
    
    return (
        <ThemeContext.Provider value={dataTheme}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext };
export default ThemeProvider;
