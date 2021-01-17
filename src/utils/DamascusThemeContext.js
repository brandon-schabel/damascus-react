import React, { createContext, useEffect, useContext, useState } from 'react'
import { lightTheme, darkTheme } from './theme'

export const DamascusThemeContext = createContext()

export const DamascusThemeProvider = ({ children }) => {
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
    <DamascusThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </DamascusThemeContext.Provider>
  )
}

export const useDamascusTheme = () => {
  const { theme, setTheme } = useContext(DamascusThemeContext)

  return {
    theme,
    setTheme,
  }
}
