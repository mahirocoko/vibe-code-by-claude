import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import * as React from 'react'
import { Link } from 'react-router'

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false)

  const closeSheet = () => setIsSheetOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Vibe by Claude</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link to="/#features" className="text-muted-foreground/60 transition-colors hover:text-muted-foreground/80">
              Features
            </Link>
            <Link to="/#pricing" className="text-muted-foreground/60 transition-colors hover:text-muted-foreground/80">
              Pricing
            </Link>
            <Link to="/about" className="text-muted-foreground/60 transition-colors hover:text-muted-foreground/80">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground/60 transition-colors hover:text-muted-foreground/80">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex">
            <Button asChild>
              <Link to="/console">Get Started</Link>
            </Button>
          </div>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link to="/" onClick={closeSheet} className="flex items-center">
                <span className="font-bold">Vibe by Claude</span>
              </Link>
              <div className="grid gap-2 py-6">
                <Link
                  to="/#features"
                  onClick={closeSheet}
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  Features
                </Link>
                <Link
                  to="/#pricing"
                  onClick={closeSheet}
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  Pricing
                </Link>
                <Link to="/about" onClick={closeSheet} className="flex w-full items-center py-2 text-lg font-semibold">
                  About
                </Link>
                <Link
                  to="/contact"
                  onClick={closeSheet}
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
