const companies = [
  'Savills',
  'Winkworth',
  'Hunters',
  'Belvoir',
  'Martin & Co',
  'EweMove',
  'Keller Williams',
  'eXp UK',
  'Nested',
];

export default function SocialProof() {
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-9">
        <p className="mb-5 text-center text-[10px] font-medium uppercase tracking-[0.24em] text-cream/70 sm:text-[11px]">
          Read by UK property professionals at
        </p>

        <div
          className="marquee-mask group overflow-hidden"
          aria-label="Companies our readers work at"
        >
          <ul className="animate-marquee flex w-max items-center group-hover:[animation-play-state:paused]">
            {[...companies, ...companies].map((company, i) => (
              <li
                key={`${company}-${i}`}
                className="flex items-center whitespace-nowrap text-lg font-medium text-cream/85 sm:text-2xl"
                aria-hidden={i >= companies.length ? 'true' : undefined}
              >
                {company}
                <span
                  aria-hidden="true"
                  className="mx-6 text-cream/40 sm:mx-8"
                >
                  &middot;
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
