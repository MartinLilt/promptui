import React from 'react'

export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

interface ButtonCommonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children?: React.ReactNode
}

type ButtonAsButtonProps = ButtonCommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonCommonProps | 'href'> & {
    href?: undefined
  }

type ButtonAsAnchorProps = ButtonCommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonCommonProps | 'href'> & {
    href: string
  }

export type ButtonDefaultProps = ButtonAsButtonProps | ButtonAsAnchorProps

export function ButtonDefault({
  variant = 'default',
  size = 'default',
  className,
  children,
  ...props
}: ButtonDefaultProps) {
  const classes = [
    'promptui-button-default',
    `promptui-button-default--${variant}`,
    `promptui-button-default--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if ('href' in props && props.href !== undefined) {
    const isExternal = /^https?:\/\//.test(props.href)
    const externalAttrs = isExternal
      ? ({ target: '_blank', rel: 'noopener noreferrer' } as const)
      : {}
    return (
      <a className={classes} {...externalAttrs} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}