# ⚠️ IMPORTANT: Google Analytics Configuration Required

Before running the website, you need to configure your Google Analytics Measurement ID.

## Quick Setup

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` and add your GA Measurement ID:**
   ```env
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   
   Replace `G-XXXXXXXXXX` with your actual Measurement ID from your Chrome extension's GA4 property.

3. **Run the development server:**
   ```bash
   npm run dev
   ```

## Where to Find Your Measurement ID

1. Go to your Google Analytics 4 property
2. Navigate to **Admin** → **Data Streams**
3. Click on your web data stream
4. Copy the **Measurement ID** (format: G-XXXXXXXXXX)

## Verification

Once configured, you can verify GA is working by:

1. Opening the browser console
2. Looking for the message: `Google Analytics initialized for website`
3. Checking the Network tab for requests to `google-analytics.com`

## More Information

See [docs/GOOGLE_ANALYTICS.md](docs/GOOGLE_ANALYTICS.md) for detailed documentation on:
- Platform differentiation (website vs extension)
- Available tracking functions
- Custom event tracking
- Deployment configuration
