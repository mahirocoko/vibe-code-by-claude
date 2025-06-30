import type { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

export function Container({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn('container mx-auto px-4 lg:px-8', className)}>{children}</div>
}
