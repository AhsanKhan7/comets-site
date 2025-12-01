# Google Analytics Setup Guide

## Overview
This website uses Google Analytics 4 (GA4) with the **same Measurement ID** as the Chrome extension to track unified analytics across both platforms.

## Configuration

### 1. Set Up Environment Variables

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Edit `.env` and add your GA Measurement ID from the Chrome extension:
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

> ⚠️ **Important**: The `.env` file is gitignored and should not be committed to version control.

### 2. Platform Differentiation

The implementation automatically tags all events from the website with a custom `platform` parameter set to `'website'`. This allows you to:

- Filter website traffic separately from extension traffic in GA4 reports
- Analyze cross-platform user journeys
- Track conversion funnels (website → extension installation)

### 3. Available Tracking Functions

The `src/utils/analytics.ts` file provides several helper functions:

#### Page Tracking
```typescript
import { trackPageView } from './utils/analytics';

trackPageView('/about', 'About Page');
```

#### Event Tracking
```typescript
import { trackEvent } from './utils/analytics';

trackEvent('CTA', 'click', 'Download Button');
```

#### Pre-built Event Trackers
```typescript
import { 
  trackChromeStoreClick,
  trackSectionView,
  trackFAQClick,
  trackContactSubmit 
} from './utils/analytics';

// Track Chrome Web Store CTA clicks
trackChromeStoreClick();

// Track section visibility
trackSectionView('Hero');

// Track FAQ interactions
trackFAQClick('What is Comets AI?');

// Track contact form submissions
trackContactSubmit();
```

## Example Usage in Components

### Tracking Button Clicks
```tsx
import { trackChromeStoreClick } from '../utils/analytics';

function CTAButton() {
  const handleClick = () => {
    trackChromeStoreClick();
    // Navigate to Chrome Web Store
    window.open('chrome-web-store-url', '_blank');
  };

  return <button onClick={handleClick}>Install Extension</button>;
}
```

### Tracking FAQ Expansion
```tsx
import { trackFAQClick } from '../utils/analytics';

function FAQItem({ question }: { question: string }) {
  const handleToggle = () => {
    trackFAQClick(question);
  };

  return <div onClick={handleToggle}>{question}</div>;
}
```

## Viewing Analytics

### In Google Analytics 4:

1. **All Traffic**: View combined website + extension traffic
2. **Filter by Platform**:
   - Go to Reports → Engagement → Events
   - Add a filter for `platform = website` to see only website traffic
   - Or filter `platform != website` to see only extension traffic

### Recommended Custom Reports:

Create a custom exploration to analyze:
- User journeys from website to extension
- Conversion rate from website visit to extension install
- Popular features on website vs extension

## Development vs Production

The GA script will only initialize if `VITE_GA_MEASUREMENT_ID` is set in your `.env` file:

- **Development**: Add the Measurement ID to test locally
- **Production**: Set the environment variable in your hosting platform (Vercel, Netlify, etc.)

## Deployment

When deploying, make sure to set the `VITE_GA_MEASUREMENT_ID` environment variable in your hosting platform's settings.

### Vercel
```bash
vercel env add VITE_GA_MEASUREMENT_ID
```

### Netlify
Go to Site Settings → Environment Variables and add:
- Key: `VITE_GA_MEASUREMENT_ID`
- Value: Your GA4 Measurement ID

### GitHub Pages / Static Hosting
For static hosting, you can either:
1. Hard-code the ID directly in `index.html` (not recommended for public repos)
2. Use a build script that injects it before deployment
