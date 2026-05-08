const steps = [
  {
    heading: 'Subscribe in 10 seconds',
    body: "Free, forever. We'll never sell your email or spam you with junk.",
  },
  {
    heading: 'Get the first issue Tuesday morning',
    body: 'Six minutes of reading, with everything you need to know about the week.',
  },
  {
    heading: 'Read it. Forward it. Or unsubscribe.',
    body: "No hard feelings if it's not for you. One click and you're out.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <ol className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
          {steps.map((step, i) => (
            <li key={step.heading} className="flex flex-col">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-cream font-serif text-2xl font-medium text-forest"
              >
                {i + 1}
              </span>
              <h3 className="mt-6 font-serif text-2xl font-medium text-cream sm:text-[1.65rem]">
                {step.heading}
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-cream/75 sm:text-base">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
