import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PixelTrack from './PixelTrack';

export const metadata: Metadata = {
  title: "You're in - Subject To Contract",
  description: 'Thanks for subscribing to Subject To Contract.',
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <PixelTrack />

      <div className="mx-auto flex w-full max-w-7xl items-center px-5 pt-6 sm:px-8 sm:pt-8">
        <Link href="/" aria-label="Subject To Contract home">
          <Image
            src="/logos/stc-logo.png"
            alt="Subject To Contract"
            width={981}
            height={520}
            priority
            className="h-auto w-32 sm:w-40"
          />
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-center px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-forest sm:text-xs">
            You&rsquo;re in
          </p>

          <h1 className="font-serif font-medium text-ink text-display-mobile sm:text-display">
            We&rsquo;ll see you Tuesday morning.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-inkLight sm:mt-8 sm:text-lg">
            A welcome email is on its way to introduce us. The next issue lands in your inbox first thing Tuesday morning.
          </p>

          <p className="mx-auto mt-10 max-w-xl text-sm text-ink/60 sm:text-base">
            In the meantime, forward this to a colleague who needs to know what&rsquo;s actually happening in the market.
          </p>

          <Link
            href="/"
            className="mt-10 inline-block text-sm font-medium text-forest underline-offset-4 transition-colors hover:underline sm:text-base"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
