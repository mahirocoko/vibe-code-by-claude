import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const BentoGrid = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn('grid w-full auto-rows-[22rem] grid-cols-1 gap-4', className)}>{children}</div>
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string
  className: string
  background: ReactNode
  Icon: any
  description: string
  href: string
  cta: string
}) => (
  <div
    key={name}
    className={cn(
      'group relative flex flex-col justify-between overflow-hidden rounded-xl',
      // Updated to match project theme
      'bg-background border border-border hover:shadow-lg transition-all duration-300',
      className,
    )}
  >
    <div>{background}</div>
    {/* Additional gradient overlay for better content readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent md:from-background/90 md:via-transparent pointer-events-none" />
    <div className="relative h-full flex flex-col justify-end md:translate-y-12 md:transition-transform md:duration-300 md:ease-out md:group-hover:translate-y-0">
      <div className="flex transform-gpu flex-col gap-3 p-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm shadow-sm border border-white/20 mb-1">
          <Icon className="h-6 w-6 text-primary transition-all duration-200 ease-in-out group-hover:scale-90" />
        </div>
        <h3 className="text-lg font-semibold text-foreground tracking-tight">{name}</h3>
        <p className="max-w-lg text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="flex items-center px-6 -mt-2 pb-6">
        <Button
          variant="ghost"
          asChild
          size="sm"
          className="pointer-events-auto text-primary hover:bg-primary/10 hover:text-primary transition-colors duration-200 -ml-2.5"
        >
          <a href={href}>
            {cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-primary/[0.02]" />
  </div>
)

export { BentoCard, BentoGrid }
