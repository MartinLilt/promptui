import React from 'react'

/**
 * Uncontrolled native input — unlike `InputDefault`/`InputEmail`, it holds no
 * React state, so the browser submits the typed value with the surrounding
 * native `<form>` (e.g. a Mailchimp embed). Pair with `library/forms/default`.
 * Attributes (`type`, `name`, `placeholder`, …) come through from the DSL.
 */
export type InputNativeProps = React.InputHTMLAttributes<HTMLInputElement>

export function InputNative({ className, ...props }: InputNativeProps) {
  return (
    <input
      className={['promptui-input-native', className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}