import { Typography } from '@/components/ui/typography'

export default function CardsShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="text-3xl font-bold mb-2">Cards</Typography>
        <Typography className="text-muted-foreground">Card components and layouts (coming soon).</Typography>
      </div>

      <div className="rounded-lg border border-dashed p-8 text-center">
        <Typography className="text-muted-foreground">Card components will be added here</Typography>
      </div>
    </div>
  )
}
