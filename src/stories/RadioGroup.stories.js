import React from 'react'
import { RadioGroup } from '../components'

export default {
  title: 'RadioGroup',
  component: RadioGroup,
}

export const Component = () => (
  <RadioGroup radioOptions={[{ value: 'test', label: 'test' }]}>
    Click Me
  </RadioGroup>
)
