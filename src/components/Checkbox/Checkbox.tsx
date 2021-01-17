import React, { InputHTMLAttributes, ReactNode } from 'react'

import './checkbox.styl'

export interface CheckboxProps extends InputHTMLAttributes<any> {
  children?: ReactNode
  className?: string
  label?: string
}

export const Checkbox = ({
  children,
  className = '',
  label,
  ...rest
}: CheckboxProps) => {
  return (
    <>
      {Array.isArray(label) &&
        label.map(currentCheckbox => {
          return (
            <>
              <input
                type="checkbox"
                {...rest}
                className={`dr-checkbox ${className}`}
              />
              <label htmlFor="scales">{currentCheckbox}</label>
            </>
          )
        })}
    </>
  )
}
