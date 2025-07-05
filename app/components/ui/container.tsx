import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

const containerVariants = cva(
  'mx-auto px-4 lg:px-8',
  {
    variants: {
      size: {
        sm: 'max-w-2xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl',
        full: 'max-w-full',
      },
    },
    defaultVariants: {
      size: 'xl',
    },
  },
)

export function Container({
  children,
  className,
  size,
  asChild = false,
}: PropsWithChildren<{
  className?: string
  asChild?: boolean
}> & VariantProps<typeof containerVariants>) {
  const Comp = asChild ? Slot : 'div'
  return <Comp className={cn(containerVariants({ size, className }))}>{children}</Comp>
}
