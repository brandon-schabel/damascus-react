import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import './button.styl'

export interface ButtonProps extends ButtonHTMLAttributes<any> {
  children?: ReactNode
  className?: string
}

export const Button = ({ children, className = '', ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={`dc-button ${className}`}>
      {children}
    </button>
  )
}
