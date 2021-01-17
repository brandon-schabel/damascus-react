import React from 'react'
import { Option } from '../components'

export default {
  title: 'Option',
  component: Option,
}

export const Component = () => (
  <Option onClick={() => console.log('Option Clicked')}>Click Me</Option>
)
