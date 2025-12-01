import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface ExtensionContextType {
  isInstalled: boolean;
}

const ExtensionContext = createContext<ExtensionContextType | undefined>(undefined);

export const ExtensionProvider = ({ children }: { children: ReactNode }) => {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check for ?installed=true in the URL
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('installed') === 'true') {
      setIsInstalled(true);
    }
  }, []);

  return (
    <ExtensionContext.Provider value={{ isInstalled }}>
      {children}
    </ExtensionContext.Provider>
  );
};

export const useExtension = () => {
  const context = useContext(ExtensionContext);
  if (context === undefined) {
    throw new Error('useExtension must be used within an ExtensionProvider');
  }
  return context;
};
