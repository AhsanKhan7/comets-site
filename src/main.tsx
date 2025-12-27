import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ExtensionProvider } from './context/ExtensionContext.tsx'
import {
  initGA,
  initMixpanel,
  identifyUser,
  trackPageView,
  initScrollTracking,
  trackTimeOnPage,
  trackExtensionStatus
} from './utils/analytics'

// Initialize Google Analytics
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
if (GA_MEASUREMENT_ID) {
  initGA(GA_MEASUREMENT_ID);
}

// Initialize Mixpanel
const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN;
if (MIXPANEL_TOKEN) {
  initMixpanel(MIXPANEL_TOKEN);
  identifyUser();

  // Track initial page view
  trackPageView(window.location.pathname, document.title);

  // Initialize scroll depth tracking
  initScrollTracking();

  // Track time on page
  trackTimeOnPage();

  // Track extension installation status
  const checkExtensionStatus = () => {
    const isInstalled = document.documentElement.hasAttribute('data-comets-extension-installed');
    trackExtensionStatus(isInstalled);
  };

  // Check immediately and after a short delay
  checkExtensionStatus();
  setTimeout(checkExtensionStatus, 1000);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExtensionProvider>
      <App />
    </ExtensionProvider>
  </StrictMode>,
)
