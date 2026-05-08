import SignupForm from './SignupForm';

export default function FinalCTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32 lg:py-40">
        <h2 className="font-serif font-medium text-ink text-display-mobile sm:text-display lg:text-display-lg">
          Read by the sharpest people in UK property.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-inkLight sm:mt-8 sm:text-lg">
          Your inbox catches up every Tuesday morning. Free.
        </p>

        <div className="mt-10">
          <SignupForm variant="footer" />
        </div>

        <p className="mt-4 text-xs text-ink/50 sm:text-sm">
          Free forever &middot; Unsubscribe anytime
        </p>
      </div>
    </section>
  );
}
