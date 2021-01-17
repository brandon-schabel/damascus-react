import React, { useState, useContext } from 'react'
import { Button } from '../components'
import {
  VelocityThemeProvider,
  VelocityThemeContext,
} from '../utils/VelocityThemeContext'

export default {
  title: 'Button',
  component: Button,
}

export const Component = () => {
  // const { theme, setTheme } = useContext({});

  // const changeTheme = () => {
  //   theme === "dark" ? setTheme("light") : setTheme("dark");
  // };

  return (
    <VelocityThemeProvider>
      {/*<Button onClick={changeTheme}>Click Me Plz</Button>*/}
      <Button>Click Me Plz</Button>
    </VelocityThemeProvider>
  )
}
