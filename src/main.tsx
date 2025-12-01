import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ExtensionProvider } from './context/ExtensionContext.tsx'
import { initGA } from './utils/analytics'

// Initialize Google Analytics
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
if (GA_MEASUREMENT_ID) {
  initGA(GA_MEASUREMENT_ID);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExtensionProvider>
      <App />
    </ExtensionProvider>
  </StrictMode>,
)
