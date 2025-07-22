'use client'
import { ThemeProvider } from 'next-themes'
import React from 'react'
export function ThemeProviderWrapper({ children }) {

  //solve hydration error
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null; // or a loading spinner
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
