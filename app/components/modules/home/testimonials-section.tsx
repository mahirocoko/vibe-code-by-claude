import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'
import { type Testimonial, TestimonialsColumn } from '@/components/ui/testimonials-columns'
import { Typography } from '@/components/ui/typography'
import { motion } from 'motion/react'

const testimonials: Testimonial[] = [
  {
    text: 'This product has completely transformed how our team collaborates. The interface is intuitive and the features are exactly what we needed.',
    name: 'Sarah Chen',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  },
  {
    text: "The best investment we've made this year. Our productivity increased by 40% within the first month of implementation.",
    name: 'Michael Rodriguez',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    text: 'Outstanding customer support and a product that delivers on its promises. Highly recommend to any growing company.',
    name: 'Emily Johnson',
    role: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    text: 'Simple, powerful, and reliable. Everything we were looking for in a solution, packaged beautifully.',
    name: 'David Park',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
  },
  {
    text: 'The level of customization available is incredible. We were able to tailor it perfectly to our workflow.',
    name: 'Lisa Thompson',
    role: 'Design Lead',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
  },
  {
    text: 'Exceeded our expectations in every way. The ROI was apparent within weeks of implementation.',
    name: 'James Wilson',
    role: 'VP of Engineering',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    text: 'The implementation process was seamless and the team was incredibly helpful throughout the entire journey.',
    name: 'Maria Garcia',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
  },
  {
    text: 'Our efficiency has improved dramatically since adopting this solution. The ROI is undeniable.',
    name: 'Alex Turner',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
  },
  {
    text: 'The user interface is incredibly intuitive and our team adapted to it immediately.',
    name: 'Jennifer Kim',
    role: 'UX Director',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <Badge variant="secondary" className="mb-6">
            Testimonials
          </Badge>
          <Typography variant="h2" className="mb-6 max-w-3xl mx-auto tracking-tight">
            What Our <span className="text-primary">Users</span> Say
          </Typography>
          <Typography variant="lead" className="max-w-2xl mx-auto text-muted-foreground">
            See what our customers have to say about us.
          </Typography>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </Container>
    </section>
  )
}
