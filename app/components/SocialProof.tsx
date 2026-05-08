const roles = [
  'Estate agency owners',
  'Lettings directors',
  'Branch managers',
  'Proptech founders',
  'Surveyors',
  'Conveyancers',
];

export default function SocialProof() {
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-9">
        <p className="mb-5 text-center text-[10px] font-medium uppercase tracking-[0.24em] text-cream/70 sm:text-[11px]">
          Read by UK property professionals
        </p>

        <ul
          className="no-scrollbar -mx-5 flex items-center gap-4 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2 sm:overflow-visible sm:px-0"
          aria-label="Reader roles"
        >
          {roles.map((role, i) => (
            <li
              key={role}
              className="flex items-center whitespace-nowrap text-sm text-cream/85 sm:text-base"
            >
              {role}
              {i < roles.length - 1 && (
                <span
                  aria-hidden="true"
                  className="ml-4 hidden text-cream/40 sm:ml-6 sm:inline"
                >
                  &middot;
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
