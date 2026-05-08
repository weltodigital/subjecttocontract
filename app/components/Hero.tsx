import Image from 'next/image';
import SignupForm from './SignupForm';

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto flex max-w-7xl items-center px-5 pt-6 sm:px-8 sm:pt-8">
        <Image
          src="/logos/stc-logo.png"
          alt="Subject To Contract"
          width={981}
          height={520}
          priority
          className="h-auto w-32 sm:w-40"
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-12 text-center sm:px-8 sm:pb-24 sm:pt-16 lg:pt-20">
        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-forest sm:text-xs">
          UK Property · Weekly · Free
        </p>

        <h1 className="font-serif font-medium text-ink text-display-mobile sm:text-display lg:text-display-lg">
          The newsletter UK property reads on Tuesday mornings.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-inkLight sm:mt-8 sm:text-lg">
          The week&rsquo;s biggest property stories, distilled. Sharp takes. Real sources. Six minutes, every Tuesday morning.
        </p>

        <div className="mt-8 sm:mt-10">
          <SignupForm variant="hero" />
        </div>

        <p className="mx-auto mt-4 text-xs text-ink/50 sm:text-sm">
          Free forever &middot; Unsubscribe anytime &middot; No spam, ever
        </p>
      </div>
    </section>
  );
}
