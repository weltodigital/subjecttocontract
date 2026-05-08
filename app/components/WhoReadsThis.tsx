const roles = [
  'Estate agency owners & directors',
  'Lettings directors & managers',
  'Branch managers',
  'Proptech founders & employees',
  'Surveyors & valuers',
  'Conveyancers & property lawyers',
  'Mortgage & finance professionals',
  'Investors & landlords',
];

export default function WhoReadsThis() {
  return (
    <section className="bg-sage">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl lg:text-5xl">
            Built for the people who run UK property
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="font-serif text-xl italic leading-relaxed text-ink sm:text-2xl">
              Subject To Contract is read by estate agency owners, lettings directors, branch managers, proptech founders, surveyors, conveyancers, and the people who actually move the UK property market.
            </p>
            <p className="mt-6 text-base leading-relaxed text-inkLight sm:text-lg">
              If your week starts on Monday morning with &ldquo;what did I miss?&rdquo; - this is for you.
            </p>
          </div>

          <ul className="space-y-3 lg:col-span-2 lg:border-l lg:border-ink/10 lg:pl-10">
            {roles.map((role) => (
              <li
                key={role}
                className="flex items-start gap-3 text-[15px] text-ink sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-forest"
                />
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
