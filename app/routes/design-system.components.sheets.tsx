import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Typography } from '@/components/ui/typography'
import { Menu } from 'lucide-react'

export default function SheetShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="text-3xl font-bold mb-2">
          Sheet
        </Typography>
        <Typography className="text-muted-foreground">
          Sliding panel component for navigation, forms, and content overlays with customizable positioning
        </Typography>
      </div>

      <div className="grid gap-8">
        {/* Basic Sheet */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Sheet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Sheet Title</SheetTitle>
                  <SheetDescription>
                    This is a basic sheet component that slides in from the right side.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <Typography>Sheet content goes here...</Typography>
                </div>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>

        {/* Mobile Navigation */}
        <Card>
          <CardHeader>
            <CardTitle>Mobile Navigation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[320px]">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>Mobile navigation menu</SheetDescription>
                </SheetHeader>
                <nav className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <Typography variant="small" className="font-medium">
                      Menu Items:
                    </Typography>
                    <div className="space-y-1">
                      <Button variant="ghost" className="w-full justify-start">
                        Home
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        About
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        Services
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        Contact
                      </Button>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Typography variant="small" className="font-medium mb-2">
                  Code Example:
                </Typography>
                <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
                  {`import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>
        Sheet description text
      </SheetDescription>
    </SheetHeader>
    <div className="mt-6">
      {/* Sheet content */}
    </div>
  </SheetContent>
</Sheet>`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
