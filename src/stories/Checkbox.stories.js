import React from 'react'
import { Checkbox } from '../components'
import { VelocityThemeProvider } from '../utils/VelocityThemeContext'

export default {
  title: 'Checkbox',
  component: Checkbox,
}
export const Component = () => {
  return (
    <>
      <VelocityThemeProvider>
        <Checkbox label={['My Checkbox1', 'My Checkbox2', 'My Checkbox3']} />
      </VelocityThemeProvider>
    </>
  )
}
