import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ExtensionProvider } from './context/ExtensionContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExtensionProvider>
      <App />
    </ExtensionProvider>
  </StrictMode>,
)
