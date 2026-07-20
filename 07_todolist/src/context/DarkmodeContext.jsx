// 파일 이름을 js나 jsx 상관 없음

import { useContext, useEffect, useState, createContext } from "react"

const DarkModeContext = createContext()

function updateDarkMode(darkMode){
    if(darkMode){
        document.documentElement.classList.add("dark")
        localStorage.theme = "dark"
    }
    else{
        document.documentElement.classList.remove("dark")
        localStorage.theme = "light"
    }
}

export function DarkModeProvider({ children }){
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        updateDarkMode(!darkMode)
    }

    useEffect(() => {
        const isDark = localStorage.theme === "dark" ||
            (!("theme" in localStorage)&& window.matchMedia("prefers-color-scheme: dark").matches)
        setDarkMode(isDark)
        updateDarkMode(isDark)
    }, []) // [] 비어있음 무조건 그냥 렌더링 


    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )

}

export const useDarkMode = () => useContext(DarkModeContext)