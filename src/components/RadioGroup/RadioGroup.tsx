import React, { useState, ReactNode } from 'react'

import { RadioButton } from '../RadioButton'
import { generateKey } from '../../utils/generateKey'
import './radioGroup.styl'

export interface radioOptionType {
  value: any
  label: string | number
  additionValues: any
}

export interface RadioGroupProps {
  radioOptions: radioOptionType[]
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number | string,
    additionalValues: any
  ) => void
  children: ReactNode
  LegendTextComponent: ReactNode
}

export const RadioGroup = ({
  children,
  LegendTextComponent,
  radioOptions = [],
  onChange = () => null,
  ...props
}: RadioGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleRadioChange = (e: any, index: number, additionalValues: any) => {
    setSelectedIndex(index)
    onChange(e, index, additionalValues)
  }

  const renderRadioButtons = () => {
    return radioOptions.map((option: any, index: number) => (
      <RadioButton
        key={generateKey('radio')}
        index={index}
        value={option.value}
        label={option.label}
        additionalValues={option.additionalValues}
        onRadioChange={handleRadioChange}
        checked={index === selectedIndex}
      />
    ))
  }

  return (
    <fieldset {...props} role="radiogroup" className="dr-radio-group">
      {/*
        // @ts-ignore */}
      <legend>{LegendTextComponent && <LegendTextComponent />}</legend>

      {radioOptions && renderRadioButtons()}
      {children}
    </fieldset>
  )
}
