import React from 'react'

export interface ContainerDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function ContainerDefault({ children, className, ...props }: ContainerDefaultProps) {
  return (
    <div className={['promptui-container-default', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}