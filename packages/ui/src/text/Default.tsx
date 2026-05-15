import React from 'react'

export interface TextDefaultProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode
}

export function TextDefault({ children, className, ...props }: TextDefaultProps) {
  return (
    <p className={['promptui-text-default', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </p>
  )
}