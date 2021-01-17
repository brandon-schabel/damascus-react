import React, { InputHTMLAttributes } from 'react'

import './input.styl'

export type InputProps = InputHTMLAttributes<any>

export const Input = (props: InputProps) => {
  return <input className="dr-input" {...props} />
}
