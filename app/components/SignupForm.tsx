'use client';

import { useEffect, useRef } from 'react';

const BEEHIIV_FORM_ID = 'eddf1942-fdf7-4cf6-8ee2-7c30acbe08e6';
const BEEHIIV_LOADER_SRC = 'https://subscribe-forms.beehiiv.com/v3/loader.js';

type Variant = 'hero' | 'footer';

type SignupFormProps = {
  variant?: Variant;
};

export default function SignupForm({ variant = 'hero' }: SignupFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // Avoid double-mount in React Strict Mode / re-renders.
    if (container.querySelector('script[data-beehiiv-form]')) return;

    const script = document.createElement('script');
    script.src = BEEHIIV_LOADER_SRC;
    script.async = true;
    script.setAttribute('data-beehiiv-form', BEEHIIV_FORM_ID);
    container.appendChild(script);
  }, []);

  const widthClass =
    variant === 'hero' ? 'max-w-xl' : 'max-w-xl';

  return (
    <div
      ref={containerRef}
      className={`mx-auto w-full ${widthClass}`}
      aria-label="Subscribe to Subject To Contract"
    />
  );
}
