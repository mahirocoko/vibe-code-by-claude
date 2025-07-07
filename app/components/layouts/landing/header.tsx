import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Typography } from '@/components/ui/typography'
import { DollarSign, Info, LogIn, Mail, Menu, Rocket, Sparkles } from 'lucide-react'
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
              Pricing
            </Link>
            <Link to="/about" className="text-foreground/70 transition-colors hover:text-foreground">
              About
            </Link>
            <Link to="/contact" className="text-foreground/70 transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/console">Login</Link>
            </Button>
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
            <SheetContent side="left" className="w-[300px] sm:w-[320px]">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center border-b pt-4 pb-4 mb-6 px-6">
                  <Link to="/" onClick={closeSheet}>
                    <Typography variant="h4" asChild>
                      <span>Vibe by Claude</span>
                    </Typography>
                  </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1 px-4">
                  <Link
                    to="/#features"
                    onClick={closeSheet}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-foreground hover:bg-accent transition-colors"
                  >
                    <Sparkles className="h-4 w-4 text-muted-foreground" />
                    <Typography variant="body" className="font-medium">
                      Features
                    </Typography>
                  </Link>
                  <Link
                    to="/#pricing"
                    onClick={closeSheet}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-foreground hover:bg-accent transition-colors"
                  >
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <Typography variant="body" className="font-medium">
                      Pricing
                    </Typography>
                  </Link>
                  <Link
                    to="/about"
                    onClick={closeSheet}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-foreground hover:bg-accent transition-colors"
                  >
                    <Info className="h-4 w-4 text-muted-foreground" />
                    <Typography variant="body" className="font-medium">
                      About
                    </Typography>
                  </Link>
                  <Link
                    to="/contact"
                    onClick={closeSheet}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-foreground hover:bg-accent transition-colors"
                  >
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <Typography variant="body" className="font-medium">
                      Contact
                    </Typography>
                  </Link>
                </nav>

                {/* CTA Section */}
                <div className="border-t pt-4 pb-6 space-y-2 px-4">
                  <Button variant="ghost" className="w-full justify-center gap-2" asChild>
                    <Link to="/console" onClick={closeSheet}>
                      <LogIn className="h-4 w-4" />
                      Login
                    </Link>
                  </Button>
                  <Button className="w-full justify-center gap-2" asChild>
                    <Link to="/console" onClick={closeSheet}>
                      <Rocket className="h-4 w-4" />
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
