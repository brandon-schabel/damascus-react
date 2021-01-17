import React, { ReactNode } from 'react'

import './radioButton.styl'

export interface RadioButtonProps {
  children?: ReactNode
  index: string | number
  label?: string | null
  value: any
  additionalValues?: any
  onRadioClick?: (
    e: React.MouseEvent<HTMLInputElement>,
    index: number | string,
    additionalValues: any
  ) => void
  onRadioChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number | string,
    additionalValues: any
  ) => void
  checked?: boolean
}

export const RadioButton = ({
  children,
  index = 0,
  label = null,
  value,
  additionalValues = null, //can be use if you prefer to pass in an object/array as the value
  onRadioClick = () => null,
  onRadioChange = () => null,
  checked = false,
  ...props
}: RadioButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    onRadioClick(e, index, additionalValues)
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onRadioChange(e, index, additionalValues)
  }

  return (
    <React.Fragment>
      <label className="dc-radio-label">
        <input
          type="radio"
          checked={checked}
          value={value}
          onClick={handleClick}
          onChange={handleOnChange}
          className="dc-radio"
          {...props}
        />
        {label && label}
        {children}
      </label>
      <br />
    </React.Fragment>
  )
}
