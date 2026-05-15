import React from 'react'

export interface GridDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function GridDefault({ children, className, ...props }: GridDefaultProps) {
  return (
    <div className={['promptui-grid-default', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}