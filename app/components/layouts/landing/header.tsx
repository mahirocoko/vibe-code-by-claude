import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Typography } from '@/components/ui/typography'
import { Menu } from 'lucide-react'
import * as React from 'react'
import { Link } from 'react-router'

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false)

  const closeSheet = () => setIsSheetOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-8 flex items-center space-x-2">
            <Typography variant="h4" asChild>
              <span>Vibe by Claude</span>
            </Typography>
          </Link>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <Link to="/#features" className="text-foreground/70 transition-colors hover:text-foreground">
              Features
            </Link>
            <Link to="/#pricing" className="text-foreground/70 transition-colors hover:text-foreground">
              Solutions
            </Link>
            <Link to="/about" className="text-foreground/70 transition-colors hover:text-foreground">
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/console">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/console">Get Started for Free</Link>
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
                <Typography variant="h4" asChild>
                  <span>Vibe by Claude</span>
                </Typography>
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
                  Solutions
                </Link>
                <Link to="/about" onClick={closeSheet} className="flex w-full items-center py-2 text-lg font-semibold">
                  About
                </Link>
                <div className="border-t pt-4 mt-4">
                  <Link
                    to="/console"
                    onClick={closeSheet}
                    className="flex w-full items-center py-2 text-lg font-semibold text-muted-foreground"
                  >
                    Login
                  </Link>
                  <Link
                    to="/console"
                    onClick={closeSheet}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    Get Started for Free
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
