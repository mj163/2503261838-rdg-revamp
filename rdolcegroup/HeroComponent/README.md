# Hero Slider Component

A high-performance, accessible, and customizable hero image slider built for Next.js applications.

## Overview

The Hero Slider is a feature-rich carousel component designed to showcase important content at the top of your pages. It follows Next.js best practices, including the use of server components, optimized image loading, accessibility standards, and efficient rendering.

## Features

- **Server Component Architecture**: Leverages Next.js Server Components for improved performance
- **Optimized Image Loading**: Implements proper lazy loading and priority strategies
- **Content Management**: Separates content from presentation for easier maintenance
- **Accessibility**: Built with full ARIA support and keyboard navigation
- **Performance Focused**: Implements efficient rendering and state management
- **Customizable**: Extensive prop options for styling and behavior
- **Error Handling**: Graceful fallbacks for image loading errors
- **TypeScript Support**: Fully typed interface for development confidence

## Installation

Place the component files in your project structure:

```
├── types/
│   └── hero.ts                # Type definitions
├── data/
│   └── hero-content.ts        # Content management
├── lib/
│   └── utils.ts               # Utility functions
└── components/ui/hero/
    ├── index.tsx              # Main entry point (server component)
    ├── hero-slider.tsx        # Server component wrapper
    ├── hero-slider-client.tsx # Client-side logic
    ├── hero-content.tsx       # Content display
    ├── slide-image.tsx        # Image handling
    └── slide-controls.tsx     # Navigation controls
```

## Usage

### Basic Usage

```tsx
import { HomeHero } from '@/components/ui/hero';

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      {/* Other page content */}
    </main>
  );
}
```

### With Custom Content and Buttons

```tsx
import { HomeHero } from '@/components/ui/hero';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main>
      <HomeHero>
        <Button variant="primary" size="lg" href="/properties">
          View Properties
        </Button>
        <Button variant="outline" size="lg" href="/about">
          About Us
        </Button>
      </HomeHero>
    </main>
  );
}
```

### Custom Configuration

```tsx
import HeroSlider from '@/components/ui/hero/hero-slider';
import { customHeroContent } from '@/data/custom-content';

export default function CustomPage() {
  return (
    <HeroSlider
      heroItems={customHeroContent.heroItems}
      textPosition="left"
      minHeight={800}
      withOverlay={true}
      overlayOpacity={60}
      withBlur={true}
      autoPlay={true}
      interval={4000}
      maxCycles={2}
    />
  );
}
```

## Content Management

Hero content is managed in a separate file for easy updates:

```typescript
// data/hero-content.ts
export const heroContent = {
  heroItems: [
    {
      title: "Our Journey – From Rentals to Homeownership",
      description: "Since 2015, RDOLCE GROUP has evolved from a rental property business...",
      src: "/static/hero/image1.webp",
      alt: "A bright and spacious modern living room"
    },
    // Additional hero items...
  ]
};
```

## Props

### HeroSlider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heroItems` | `HeroSlide[]` | Required | Array of slide content objects |
| `interval` | `number` | `5000` | Time between slide transitions (ms) |
| `autoPlay` | `boolean` | `true` | Whether to auto-advance slides |
| `textPosition` | `'center' \| 'left'` | `'left'` | Horizontal alignment of text content |
| `minHeight` | `number` | `700` | Minimum height of the slider (px) |
| `withOverlay` | `boolean` | `true` | Whether to add dark overlay to images |
| `overlayOpacity` | `number` | `50` | Opacity of overlay (0-100) |
| `withBlur` | `boolean` | `true` | Whether to slightly blur background images |
| `className` | `string` | `undefined` | Additional CSS classes |
| `maxCycles` | `number` | `5` | Maximum number of carousel cycles before stopping |
| `children` | `React.ReactNode` | `undefined` | Content to render in slide (typically buttons) |

### HeroSlide Interface

```typescript
interface HeroSlide {
  title: string;
  description: string;
  src: string;
  alt?: string;
}
```

## Accessibility

The Hero Slider is built with accessibility in mind:

- Proper ARIA attributes for carousel functionality
- Keyboard navigation for slide controls
- Screen reader support with appropriate roles and live regions
- Visible focus indicators for interactive elements
- Alt text for all images

## Performance Optimizations

- Only renders the current and adjacent slides
- Implements React's useReducer for efficient state management
- Uses proper cleanup of timers and event listeners
- Leverages Next.js Image component for optimized image loading
- Uses memoization to prevent unnecessary re-renders

## Browser Support

The Hero Slider works in all modern browsers and degrades gracefully in older browsers.

## Dependencies

- Next.js 13+ (with App Router)
- React 18+
- clsx or tailwind-merge for class name management

## License

MIT
