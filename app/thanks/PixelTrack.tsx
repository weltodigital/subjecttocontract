'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    fbq?: (event: string, action: string, params?: Record<string, unknown>) => void;
    lintrk?: (action: string, params: Record<string, unknown>) => void;
  }
}

const LINKEDIN_CONVERSION_ID = 27823138;

export default function PixelTrack() {
  useEffect(() => {
    window.fbq?.('track', 'Lead');
    window.lintrk?.('track', { conversion_id: LINKEDIN_CONVERSION_ID });
  }, []);

  return null;
}
