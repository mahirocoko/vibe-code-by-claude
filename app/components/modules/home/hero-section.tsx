import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { ArrowRight, MoveRight, Palette } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'

function HeroSection() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ['amazing', 'innovative', 'powerful', 'beautiful', 'intelligent'], [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <Container asChild>
      <section className="py-20 lg:py-40">
        <div className="flex gap-8 items-center justify-center flex-col text-center">
          {/* Animated Gradient Text Badge */}
          <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] hover:cursor-pointer">
            <span
              className={cn(
                'absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-primary/50 via-primary/80 to-primary/50 bg-[length:300%_100%] p-[1px]',
              )}
              style={{
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'destination-out',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'subtract',
                WebkitClipPath: 'padding-box',
              }}
            />
            ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedShinyText 
              className="text-sm font-medium"
              colorFrom="oklch(var(--primary))"
              colorTo="#1f2937"
            >
              Read our launch article
            </AnimatedShinyText>
            <ArrowRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </div>

          {/* Animated Heading */}
          <div className="flex gap-4 flex-col">
            <Typography variant="h1" className="max-w-2xl">
              <span>Build something</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-primary"
                    initial={{ opacity: 0, y: '-100' }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </Typography>

            <Typography variant="lead" className="max-w-2xl mx-auto">
              A modern, fast, and scalable foundation for your web applications. Built with React Router v7, TypeScript,
              and the latest web technologies to help you ship faster than ever.
            </Typography>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" variant="outline" asChild>
              <Link to="/design-system">
                Explore components <Palette className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" asChild>
              <Link to="/console">
                Get started <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Container>
  )
}

export { HeroSection }
