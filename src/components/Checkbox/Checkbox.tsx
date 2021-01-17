import React, { InputHTMLAttributes, ReactNode, Fragment} from 'react'

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
    <Fragment>
      {Array.isArray(label) &&
        label.map(currentCheckbox => {
          return (
            <Fragment>
              <input
                type="checkbox"
                {...rest}
                className={`dr-checkbox ${className}`}
              />
              <label htmlFor="scales">{currentCheckbox}</label>
            </Fragment>
          )
        })}
    </Fragment>
  )
}
