import React, { createContext, useEffect, useContext, useState } from 'react'
import { lightTheme, darkTheme } from './theme'

export const VelocityThemeContext = createContext()

export const VelocityThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const applyTheme = () => {
    const selectedThemeConfig = theme === 'dark' ? lightTheme : darkTheme

    Object.keys(selectedThemeConfig).map(key => {
      const value = selectedThemeConfig[key]
      document.documentElement.style.setProperty(key, value)
    })
  }

  useEffect(() => {
    console.log('theme changed')
    applyTheme()
  }, [theme])

  return (
    <VelocityThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </VelocityThemeContext.Provider>
  )
}

export const useVelocityTheme = () => {
  const { theme, setTheme } = useContext(VelocityThemeContext)

  return {
    theme,
    setTheme,
  }
}
