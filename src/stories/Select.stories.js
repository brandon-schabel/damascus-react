import React from 'react'
import { Select } from '../components'

export default {
  title: 'Select',
  component: Select,
}

export const Component = () => (
  <Select onClick={() => console.log('Select Clicked')}>Click Me</Select>
)
