import React from 'react'
import { RadioButton } from '../components'

export default {
  title: 'RadioButton',
  component: RadioButton,
}

export const Component = () => {
  const handleRadioClick = (e, index, additionalValues) => {
    console.log(e)
    console.log(index)
    console.log(additionalValues)
  }
  const handleRadioChange = (e, index, additionalValues) => {
    console.log(e)
    console.log(index)
    console.log(additionalValues)
  }
  return (
    <RadioButton
      index="test"
      value="test"
      onRadioClick={handleRadioClick}
      onRadioChange={handleRadioChange}
    >
      Click Me
    </RadioButton>
  )
}
