import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark')
    const saveTheme = localStorage.getItem('theme')

    useEffect(() => {
        if (saveTheme) {
            setTheme(JSON.parse(saveTheme))
        }
    },[])

    const handleTheme = (value) => {
        setTheme(value)
        localStorage.setItem('theme', JSON.stringify(value))
        console.log(value)
    }

    return(
        <ThemeContext.Provider value={{ theme, handleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}