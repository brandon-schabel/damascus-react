import React, { ReactNode } from 'react'

export interface OptionProps {
  children: ReactNode
}

export const Option = (props: OptionProps) => {
  return <option {...props}>{props.children}</option>
}
