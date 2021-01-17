import React, { ReactNode } from 'react'

import './select.styl'

export interface SelectProps {
  children?: ReactNode
}

export const Select = ({ children, ...rest }: SelectProps) => {
  return <select {...rest}>{children}</select>
}
