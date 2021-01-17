import React, {useState, useContext} from 'react'
import {Button} from '../components'
import {
  DamascusThemeProvider,
  DamascusThemeContext,
} from '../utils/DamascusThemeContext'

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
    <DamascusThemeProvider>
      {/*<Button onClick={changeTheme}>Click Me Plz</Button>*/}
      <Button>Click Me Plz</Button>
    </DamascusThemeProvider>
  )
}
