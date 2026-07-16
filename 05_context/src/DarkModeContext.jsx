import React from "react"
import { createContext } from "react"
import { useState, useEffect } from "react"

export const DarkModeContext = createContext()

export function DarkModeProvider({ children }){ // children에 어떠한 컴포넌트를 넣으면
    const [darkMode, setDarckMode] = useState(() => {
        const savedDarkMode = localStorage.getItem("darkMode")
        return savedDarkMode === "true"
    })

    const toggleDarkMode = () => {
        setDarckMode((prevDarkMode => !prevDarkMode))
    }

    useEffect(() => {
        localStorage.setItem("darkMode", String(darkMode))
        document.documentElement.classList.toggle("dark", darkMode)
    }, [darkMode])

    return( 
        // 여기서 감싸서 전부 사용 가능
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}> 
            {children}
        </DarkModeContext.Provider>
    )
}