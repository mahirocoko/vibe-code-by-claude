import { Link, Outlet } from 'react-router'

export default function LandingLayout() {
  return (
    <div>
      <nav className="bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-lg font-bold">
                Vibe by Gemini
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link to="/pricing" className="text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
