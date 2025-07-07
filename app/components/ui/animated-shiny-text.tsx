import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<'span'> {
  speed?: number
  colorFrom?: string
  colorTo?: string
}

export function AnimatedShinyText({
  children,
  className,
  speed = 1,
  colorFrom = 'oklch(var(--primary))',
  colorTo = '#374151',
  ...props
}: AnimatedShinyTextProps) {
  return (
    <span
      style={
        {
          '--bg-size': `${speed * 300}%`,
          '--color-from': colorFrom,
          '--color-to': colorTo,
        } as React.CSSProperties
      }
      className={cn(
        `inline animate-gradient bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
