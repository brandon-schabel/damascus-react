import React, {HtmlHTMLAttributes} from 'react'

import './box.styl'

export interface boxProps extends HtmlHTMLAttributes<any> {
    children?: React.ReactNode
    className?: string
}

export const Box = ({children, className = '', ...rest}: boxProps) => {
    return (
        <div {...rest} className={`dr-box ${className}`}>
            {children}
        </div>
    )
}
