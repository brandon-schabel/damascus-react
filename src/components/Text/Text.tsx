import React, { HTMLAttributes, ReactNode } from 'react'

import './text.styl'

export interface TextProps extends HTMLAttributes<any> {
  tag: string
  className?: string
  children?: ReactNode
}

export const Text = ({
  tag = 'h1',
  className = '',
  children,
  ...rest
}: TextProps) => {
  switch (tag) {
    case 'h1':
      return (
        <h1 {...rest} className={`dr-h1 dr-text ${className}`}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 {...rest} className={`dr-h2 dr-text ${className}`}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 {...rest} className={`dr-h3 dr-text ${className}`}>
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4 {...rest} className={`dr-h4 dr-text ${className}`}>
          {children}
        </h4>
      )
    case 'h5':
      return (
        <h5 {...rest} className={`dr-h5 dr-text ${className}`}>
          {children}
        </h5>
      )
    case 'h6':
      return (
        <h6 {...rest} className={`dr-h6 dr-text ${className}`}>
          {children}
        </h6>
      )
    case 'p':
      return (
        <p {...rest} className={`dr-p dr-text ${className}`}>
          {children}
        </p>
      )
    default:
      return (
        <h2 {...rest} className={`dr-h2 dr-text ${className}`}>
          {children}
        </h2>
      )
  }
}
