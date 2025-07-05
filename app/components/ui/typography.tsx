import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import type * as React from 'react'

import { cn } from '@/lib/utils'

const typographyVariants = cva('', {
  variants: {
    variant: {
      // Headings
      h1: 'text-4xl lg:text-5xl font-bold tracking-tight',
      h2: 'text-3xl lg:text-4xl font-bold tracking-tight',
      h3: 'text-2xl lg:text-3xl font-bold tracking-tight',
      h4: 'text-xl lg:text-2xl font-bold tracking-tight',
      h5: 'text-lg lg:text-xl font-bold tracking-tight',
      h6: 'text-base lg:text-lg font-bold tracking-tight',
      
      // Text variants
      lead: 'text-xl text-muted-foreground leading-relaxed',
      large: 'text-lg leading-relaxed',
      body: 'text-base leading-relaxed',
      small: 'text-sm leading-normal',
      muted: 'text-sm text-muted-foreground leading-normal',
      subtle: 'text-sm text-muted-foreground/70 leading-normal',
      
      // Special elements
      code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      pre: 'overflow-x-auto rounded-lg border bg-muted/30 p-4 font-mono text-sm',
      blockquote: 'border-l-4 border-border pl-6 italic text-muted-foreground',
      list: 'ml-6 list-disc space-y-2',
      'ordered-list': 'ml-6 list-decimal space-y-2',
      'list-item': 'leading-relaxed',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
})

type TypographyElement = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'p' | 'span' | 'div'
  | 'code' | 'pre' | 'blockquote'
  | 'ul' | 'ol' | 'li'

const variantElementMap: Record<string, TypographyElement> = {
  h1: 'h1',
  h2: 'h2', 
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  lead: 'p',
  large: 'p',
  body: 'p',
  small: 'p',
  muted: 'p',
  subtle: 'p',
  code: 'code',
  pre: 'pre',
  blockquote: 'blockquote',
  list: 'ul',
  'ordered-list': 'ol',
  'list-item': 'li',
}

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  asChild?: boolean
  className?: string
  children?: React.ReactNode
}

function Typography({
  variant = 'body',
  asChild = false,
  className,
  children,
  ...props
}: TypographyProps & Record<string, any>) {
  const Element = asChild ? Slot : variantElementMap[variant!] || 'p'
  
  return (
    <Element
      data-slot="typography"
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    >
      {children}
    </Element>
  )
}

export { Typography, typographyVariants }