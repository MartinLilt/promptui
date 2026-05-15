import React from 'react'

export interface HeadingDefaultProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
}

export function HeadingDefault({ children, className, ...props }: HeadingDefaultProps) {
  return (
    <h2 className={['promptui-heading-default', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </h2>
  )
}