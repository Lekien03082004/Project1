
import React, { createContext ,useEffect,useState} from 'react';

const ThemeContext = createContext()

function ThemeProvider({children}) {
    useEffect(function() {
        if(localStorage.getItem("dark") === null){
            localStorage.setItem("dark", "false")
        }
    },[])
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("dark") === "true");
    console.log(isDarkMode);
    const toggleDarkMode = ()=>{
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem("dark", newDarkMode ? "true" : "false")
    };
    return (
        <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider};