import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Typography } from '@/components/ui/typography'
import { MoveRight, Palette } from 'lucide-react'
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
          {/* Badge */}
          <Badge variant="secondary" className="gap-2">
            Read our launch article <MoveRight className="w-4 h-4" />
          </Badge>

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
