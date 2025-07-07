import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Typography } from '@/components/ui/typography'
import { Calendar, CreditCard, Eye, EyeOff, Lock, Mail, Search, User } from 'lucide-react'
import { useState } from 'react'

export default function Route() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="text-3xl font-bold mb-2">
          Input Components
        </Typography>
        <Typography className="text-muted-foreground">Form input components with various states and types</Typography>
      </div>

      <div className="grid gap-8">
        {/* Basic Inputs */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Input Types</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="text">Text Input</Label>
                <Input type="text" id="text" placeholder="Enter your name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Input</Label>
                <Input type="email" id="email" placeholder="your@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password Input</Label>
                <Input type="password" id="password" placeholder="Enter password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="number">Number Input</Label>
                <Input type="number" id="number" placeholder="123" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tel">Phone Input</Label>
                <Input type="tel" id="tel" placeholder="+1 (555) 000-0000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="url">URL Input</Label>
                <Input type="url" id="url" placeholder="https://example.com" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input with Icons */}
        <Card>
          <CardHeader>
            <CardTitle>Input with Icons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="search">Search Input</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="search" id="search" placeholder="Search..." className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-icon">Email with Icon</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="email" id="email-icon" placeholder="Email address" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password-toggle">Password with Toggle</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id="password-toggle"
                    placeholder="Password"
                    className="pl-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="user-icon">Username with Icon</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="text" id="user-icon" placeholder="Username" className="pl-10" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input States */}
        <Card>
          <CardHeader>
            <CardTitle>Input States</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="default-state">Default State</Label>
                <Input id="default-state" placeholder="Default input" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="focused-state">Focused State</Label>
                <Input id="focused-state" placeholder="Click to focus" className="ring-2 ring-ring ring-offset-2" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="disabled-state">Disabled State</Label>
                <Input id="disabled-state" placeholder="Disabled input" disabled />
              </div>

              <div className="space-y-2">
                <Label htmlFor="readonly-state">Read Only State</Label>
                <Input id="readonly-state" value="Read only value" readOnly />
              </div>

              <div className="space-y-2">
                <Label htmlFor="error-state">
                  Error State
                  <Badge variant="destructive" className="ml-2 text-xs">
                    Required
                  </Badge>
                </Label>
                <Input
                  id="error-state"
                  placeholder="Error input"
                  className="border-destructive focus:ring-destructive"
                />
                <Typography variant="small" className="text-destructive">
                  This field is required
                </Typography>
              </div>

              <div className="space-y-2">
                <Label htmlFor="success-state">
                  Success State
                  <Badge className="ml-2 text-xs bg-green-500">Valid</Badge>
                </Label>
                <Input id="success-state" value="Valid input" className="border-green-500 focus:ring-green-500" />
                <Typography variant="small" className="text-green-600">
                  Looks good!
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Textarea */}
        <Card>
          <CardHeader>
            <CardTitle>Textarea Component</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="message">Default Textarea</Label>
                <Textarea id="message" placeholder="Type your message here..." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback">Larger Textarea</Label>
                <Textarea id="feedback" placeholder="Share your detailed feedback..." rows={6} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="disabled-textarea">Disabled Textarea</Label>
                <Textarea id="disabled-textarea" placeholder="Disabled textarea" disabled />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fixed-textarea">Fixed Size Textarea</Label>
                <Textarea
                  id="fixed-textarea"
                  placeholder="This textarea cannot be resized"
                  className="resize-none"
                  rows={4}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Select Component */}
        <Card>
          <CardHeader>
            <CardTitle>Select Component</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Basic Select</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Framework Select</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue.js</SelectItem>
                    <SelectItem value="angular">Angular</SelectItem>
                    <SelectItem value="svelte">Svelte</SelectItem>
                    <SelectItem value="nextjs">Next.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Countries Select</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">🇺🇸 United States</SelectItem>
                    <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
                    <SelectItem value="ca">🇨🇦 Canada</SelectItem>
                    <SelectItem value="th">🇹🇭 Thailand</SelectItem>
                    <SelectItem value="jp">🇯🇵 Japan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Priority Select</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">🟢 Low Priority</SelectItem>
                    <SelectItem value="medium">🟡 Medium Priority</SelectItem>
                    <SelectItem value="high">🟠 High Priority</SelectItem>
                    <SelectItem value="critical">🔴 Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Form Example */}
        <Card>
          <CardHeader>
            <CardTitle>Complete Form Example</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="first-name" placeholder="John" className="pl-10" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="last-name" placeholder="Doe" className="pl-10" required />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="form-email">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="email" id="form-email" placeholder="john@example.com" className="pl-10" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="card-number" placeholder="1234 5678 9012 3456" className="pl-10" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="expiry" placeholder="MM/YY" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" maxLength={3} />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Country</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="th">Thailand</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea id="notes" placeholder="Any additional information..." rows={4} />
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1">
                  Submit Form
                </Button>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
