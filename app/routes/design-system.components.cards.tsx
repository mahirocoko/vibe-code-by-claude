import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { Heart, MessageCircle, Share2, Star } from 'lucide-react'

export default function Route() {
  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="text-3xl font-bold mb-2">
          Cards
        </Typography>
        <Typography className="text-muted-foreground">Flexible card components from shadcn/ui</Typography>
      </div>

      <div className="grid gap-8">
        {/* Basic Cards */}
        <div className="space-y-4">
          <Typography variant="h2">Basic Card Components</Typography>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Simple Card */}
            <Card>
              <CardHeader>
                <CardTitle>Simple Card</CardTitle>
                <CardDescription>A basic card with header and content</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography>This is the card content. You can put any content here.</Typography>
              </CardContent>
            </Card>

            {/* Card with Footer */}
            <Card>
              <CardHeader>
                <CardTitle>Card with Footer</CardTitle>
                <CardDescription>Card that includes a footer with actions</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography>This card demonstrates the use of CardFooter component.</Typography>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>

            {/* Card with Badge */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Featured Card</CardTitle>
                    <CardDescription>Card with badge indicator</CardDescription>
                  </div>
                  <Badge>New</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Typography>This card shows how to combine cards with badges.</Typography>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Cards */}
        <div className="space-y-4">
          <Typography variant="h2">Product Cards</Typography>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted" />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Product Name</CardTitle>
                  <Badge variant="secondary">$29</Badge>
                </div>
                <CardDescription>High-quality product with amazing features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                  <Typography variant="small" className="ml-2">
                    4.8 (124 reviews)
                  </Typography>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20" />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Premium Product</CardTitle>
                  <Badge>$99</Badge>
                </div>
                <CardDescription>Premium quality with extended warranty</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                  <Typography variant="small" className="ml-2">
                    5.0 (89 reviews)
                  </Typography>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Buy Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Social Cards */}
        <div className="space-y-4">
          <Typography variant="h2">Social Cards</Typography>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary" />
                  <div>
                    <CardTitle className="text-base">@username</CardTitle>
                    <CardDescription>2 hours ago</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Typography>
                  Just finished building an amazing new feature with React and TypeScript! The development experience is
                  incredible. 🚀
                </Typography>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Heart className="h-4 w-4" />
                    24
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <MessageCircle className="h-4 w-4" />5
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary" />
                  <div>
                    <CardTitle className="text-base">Design Team</CardTitle>
                    <CardDescription>Yesterday</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Typography className="mb-4">
                  New design system components are now available! Check out our updated documentation.
                </Typography>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-md" />
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Heart className="h-4 w-4" />
                    142
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    12
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
