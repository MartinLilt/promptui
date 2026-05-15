import React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

export type AccordionType = 'single' | 'multiple'
export type AccordionVariant = 'default' | 'bordered' | 'separated'

export interface AccordionDefaultSingleProps extends Omit<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>, 'type' | 'value' | 'defaultValue' | 'onValueChange'> {
  type?: 'single'
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  collapsible?: boolean
  variant?: AccordionVariant
}

export interface AccordionDefaultMultipleProps extends Omit<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>, 'type' | 'value' | 'defaultValue' | 'onValueChange'> {
  type: 'multiple'
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  variant?: AccordionVariant
}

export type AccordionDefaultProps = AccordionDefaultSingleProps | AccordionDefaultMultipleProps

export const AccordionDefault = React.forwardRef<HTMLDivElement, AccordionDefaultProps>(
  function AccordionDefault(props, ref) {
    const { variant = 'default', className } = props
    const baseClass = [
      'promptui-accordion-default',
      `promptui-accordion-default--${variant}`,
      className,
    ].filter(Boolean).join(' ')

    if (props.type === 'multiple') {
      const { variant: _v, className: _c, ...rest } = props
      return <AccordionPrimitive.Root ref={ref} className={baseClass} {...rest} />
    }
    const { variant: _v, className: _c, type = 'single', collapsible = true, ...rest } = props as AccordionDefaultSingleProps
    return (
      <AccordionPrimitive.Root
        ref={ref}
        type={type}
        collapsible={collapsible}
        className={baseClass}
        {...rest}
      />
    )
  }
) as React.ForwardRefExoticComponent<AccordionDefaultProps & React.RefAttributes<HTMLDivElement>>

type AccordionItemProps = Omit<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>, 'value'> & {
  value?: string
}

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  function AccordionItem({ className, value, ...props }, ref) {
    const autoId = React.useId()
    return (
      <AccordionPrimitive.Item
        ref={ref}
        value={value ?? autoId}
        className={['promptui-accordion-item', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(
  function AccordionTrigger({ className, children, ...props }, ref) {
    return (
      <AccordionPrimitive.Header className="promptui-accordion-header">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={['promptui-accordion-trigger', className].filter(Boolean).join(' ')}
          {...props}
        >
          {children}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    )
  }
)

export const AccordionContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(
  function AccordionContent({ className, ...props }, ref) {
    return (
      <AccordionPrimitive.Content
        ref={ref}
        className={['promptui-accordion-content', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)