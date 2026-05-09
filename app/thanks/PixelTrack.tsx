'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    fbq?: (event: string, action: string, params?: Record<string, unknown>) => void;
  }
}

export default function PixelTrack() {
  useEffect(() => {
    window.fbq?.('track', 'Lead');
  }, []);

  return null;
}
