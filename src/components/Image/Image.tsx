import React, { ImgHTMLAttributes, ReactNode } from 'react'

import './image.styl'

export interface ImageProps extends ImgHTMLAttributes<any> {
  children?: ReactNode
}

// TODO: add background image functionality
export const Image = ({ children, alt, ...rest }: ImageProps) => {
  return (
    <img className="dr-image" alt={alt} {...rest}>
      {children}
    </img>
  )
}
