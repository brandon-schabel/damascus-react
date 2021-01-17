import React from 'react'
import { Checkbox } from '../components'
import { DamascusThemeProvider } from '../utils/DamascusThemeContext'

export default {
  title: 'Checkbox',
  component: Checkbox,
}
export const Component = () => {
  return (
    <>
      <DamascusThemeProvider>
        <Checkbox label={['My Checkbox1', 'My Checkbox2', 'My Checkbox3']} />
      </DamascusThemeProvider>
    </>
  )
}
