export default function TypographyShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Typography</h1>
        <p className="text-muted-foreground">
          Typography scale and text styles for consistent design.
        </p>
      </div>

      {/* Headings */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Headings</h2>
        <div className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Heading 1</h1>
            <code className="text-xs text-muted-foreground">text-4xl font-bold tracking-tight</code>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Heading 2</h2>
            <code className="text-xs text-muted-foreground">text-3xl font-semibold tracking-tight</code>
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Heading 3</h3>
            <code className="text-xs text-muted-foreground">text-2xl font-semibold tracking-tight</code>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Heading 4</h4>
            <code className="text-xs text-muted-foreground">text-xl font-semibold</code>
          </div>
          <div>
            <h5 className="text-lg font-semibold">Heading 5</h5>
            <code className="text-xs text-muted-foreground">text-lg font-semibold</code>
          </div>
          <div>
            <h6 className="text-base font-semibold">Heading 6</h6>
            <code className="text-xs text-muted-foreground">text-base font-semibold</code>
          </div>
        </div>
      </section>

      {/* Body Text */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Body Text</h2>
        <div className="space-y-4">
          <div>
            <p className="text-lg">Large text - Perfect for introductory paragraphs</p>
            <code className="text-xs text-muted-foreground">text-lg</code>
          </div>
          <div>
            <p className="text-base">Base text - Default body text size</p>
            <code className="text-xs text-muted-foreground">text-base</code>
          </div>
          <div>
            <p className="text-sm">Small text - For secondary information</p>
            <code className="text-xs text-muted-foreground">text-sm</code>
          </div>
          <div>
            <p className="text-xs">Extra small text - For captions and labels</p>
            <code className="text-xs text-muted-foreground">text-xs</code>
          </div>
        </div>
      </section>

      {/* Font Weights */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Font Weights</h2>
        <div className="space-y-2">
          <p className="font-thin">Thin (100)</p>
          <p className="font-extralight">Extra Light (200)</p>
          <p className="font-light">Light (300)</p>
          <p className="font-normal">Normal (400)</p>
          <p className="font-medium">Medium (500)</p>
          <p className="font-semibold">Semibold (600)</p>
          <p className="font-bold">Bold (700)</p>
          <p className="font-extrabold">Extra Bold (800)</p>
          <p className="font-black">Black (900)</p>
        </div>
      </section>

      {/* Text Colors */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Text Colors</h2>
        <div className="space-y-2">
          <p className="text-foreground">Default text color</p>
          <p className="text-muted-foreground">Muted text color</p>
          <p className="text-primary">Primary text color</p>
          <p className="text-info">Info text color</p>
          <p className="text-success">Success text color</p>
          <p className="text-warning">Warning text color</p>
          <p className="text-error">Error text color</p>
        </div>
      </section>

      {/* Special Styles */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Special Styles</h2>
        <div className="space-y-4">
          <div>
            <p className="italic">Italic text for emphasis</p>
            <code className="text-xs text-muted-foreground">italic</code>
          </div>
          <div>
            <p className="underline">Underlined text</p>
            <code className="text-xs text-muted-foreground">underline</code>
          </div>
          <div>
            <p className="line-through">Strikethrough text</p>
            <code className="text-xs text-muted-foreground">line-through</code>
          </div>
          <div>
            <p className="uppercase">Uppercase text</p>
            <code className="text-xs text-muted-foreground">uppercase</code>
          </div>
          <div>
            <p className="lowercase">LOWERCASE TEXT</p>
            <code className="text-xs text-muted-foreground">lowercase</code>
          </div>
          <div>
            <p className="capitalize">capitalize each word</p>
            <code className="text-xs text-muted-foreground">capitalize</code>
          </div>
        </div>
      </section>

      {/* Line Heights */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Line Heights</h2>
        <div className="space-y-4">
          <div>
            <p className="leading-none">Leading none - Very tight line height for specific use cases</p>
            <code className="text-xs text-muted-foreground">leading-none</code>
          </div>
          <div>
            <p className="leading-tight">Leading tight - Slightly reduced line height for headings</p>
            <code className="text-xs text-muted-foreground">leading-tight</code>
          </div>
          <div>
            <p className="leading-normal">Leading normal - Default line height for body text</p>
            <code className="text-xs text-muted-foreground">leading-normal</code>
          </div>
          <div>
            <p className="leading-relaxed">Leading relaxed - Increased line height for better readability</p>
            <code className="text-xs text-muted-foreground">leading-relaxed</code>
          </div>
          <div>
            <p className="leading-loose">Leading loose - Extra space between lines for emphasis</p>
            <code className="text-xs text-muted-foreground">leading-loose</code>
          </div>
        </div>
      </section>
    </div>
  )
}