# Font Usage Guide

This project includes five beautiful fonts that you can use throughout your application:

## Available Fonts

1. **Inter** - Modern, highly readable sans-serif
2. **Poppins** - Friendly, geometric sans-serif  
3. **Roboto** - Clean, technical sans-serif
4. **Open Sans** - Optimized for readability
5. **Helvetica Neue** - Classic system font fallback

## Usage

### CSS Classes

You can use predefined CSS classes for consistent font styling:

```tsx
// Font families with normal weight
<h1 className="font-inter">Inter Heading</h1>
<p className="font-poppins">Poppins paragraph</p>
<span className="font-roboto">Roboto text</span>
<div className="font-open-sans">Open Sans content</div>
<button className="font-helvetica">Helvetica button</button>

// Font families with specific weights
<h1 className="font-inter-bold">Bold Inter heading</h1>
<h2 className="font-poppins-semibold">Semibold Poppins subheading</h2>
<p className="font-open-sans-normal">Regular Open Sans body</p>
<span className="font-roboto-light">Light Roboto caption</span>
```

### Available Weight Classes

Each font (except Helvetica) has these weight variants:
- `font-{family}-light` (300)
- `font-{family}-normal` (400) 
- `font-{family}-medium` (500)
- `font-{family}-semibold` (600) - *not available for Roboto*
- `font-{family}-bold` (700)

Where `{family}` can be: `inter`, `poppins`, `roboto`, or `open-sans`.

### TypeScript Helpers

Import font utilities for type-safe font management:

```tsx
import { getFontClass, fontCombinations } from '@/types/fonts';

// Get a specific font class
const headingClass = getFontClass('inter', 'bold'); // Returns 'font-inter-bold'

// Use predefined combinations
const { heading, body } = fontCombinations.modernClean;

<h1 className={heading}>Modern Clean Heading</h1>
<p className={body}>Modern Clean Body Text</p>
```

### Predefined Font Combinations

Choose from these curated combinations for consistent design:

#### Modern Clean
- **Heading**: Inter Bold
- **Subheading**: Inter Semibold  
- **Body**: Open Sans Normal
- **Caption**: Inter Normal

#### Friendly
- **Heading**: Poppins Bold
- **Subheading**: Poppins Semibold
- **Body**: Open Sans Normal
- **Caption**: Open Sans Normal

#### Technical
- **Heading**: Roboto Bold
- **Subheading**: Roboto Medium
- **Body**: Roboto Normal
- **Caption**: Roboto Light

#### Classic
- **Heading**: Helvetica Bold
- **Subheading**: Helvetica Semibold
- **Body**: Open Sans Normal
- **Caption**: Helvetica Normal

## Best Practices

1. **Consistency**: Stick to one font combination throughout your app
2. **Hierarchy**: Use different weights to create visual hierarchy
3. **Readability**: Use Open Sans or Roboto for long-form text
4. **Branding**: Use Inter or Poppins for headings and UI elements
5. **Fallbacks**: Helvetica Neue provides system font fallback

## Examples

```tsx
// Article page
<article>
  <h1 className="font-poppins-bold text-3xl mb-4">
    Article Title
  </h1>
  <h2 className="font-poppins-semibold text-xl mb-6 text-gray-600">
    Article Subtitle
  </h2>
  <div className="font-open-sans-normal text-lg leading-relaxed">
    Article content with excellent readability...
  </div>
  <footer className="font-inter-normal text-sm text-gray-500 mt-8">
    Published on June 12, 2025
  </footer>
</article>

// Dashboard UI
<div className="dashboard">
  <h1 className="font-inter-bold text-2xl">Dashboard</h1>
  <nav className="font-inter-medium">Navigation items</nav>
  <main className="font-roboto-normal">Dashboard content</main>
</div>
```

## Font Loading

All fonts are loaded via Next.js Google Fonts with:
- Optimized loading with `display: 'swap'`
- Latin subset for optimal performance
- Multiple weights for design flexibility

The fonts are automatically available throughout your application once imported in the root layout.
