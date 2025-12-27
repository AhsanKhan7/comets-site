import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'html-transform',
        transformIndexHtml(html: string) {
          let transformedHtml = html.replace(
            /%VITE_GA_MEASUREMENT_ID%/g,
            env.VITE_GA_MEASUREMENT_ID || ''
          );
          transformedHtml = transformedHtml.replace(
            /%VITE_MIXPANEL_TOKEN%/g,
            env.VITE_MIXPANEL_TOKEN || ''
          );
          return transformedHtml;
        },
      },
    ],
  };
})
