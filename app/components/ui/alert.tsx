import { type VariantProps, cva } from 'class-variance-authority'
import type * as React from 'react'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:pl-8',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        info: 'border-info/20 bg-info/10 text-info-foreground [&>svg]:text-info',
        warning: 'border-warning/20 bg-warning/10 text-warning-foreground [&>svg]:text-warning',
        success: 'border-success/20 bg-success/10 text-success-foreground [&>svg]:text-success',
        error: 'border-error/20 bg-error/10 text-error-foreground [&>svg]:text-error',
        destructive: 'border-destructive/20 bg-destructive/10 text-destructive-foreground [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Alert({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>) {
  return <div role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
}

function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className={cn('mb-1 font-semibold leading-none tracking-tight', className)} {...props} />
}

function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <div className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />
}

export { Alert, AlertTitle, AlertDescription, alertVariants }
