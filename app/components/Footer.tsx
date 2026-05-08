import Image from 'next/image';
import Link from 'next/link';

const links = [
  { label: 'Privacy', href: 'https://www.beehiiv.com/privacy' },
  { label: 'Contact', href: 'mailto:subjecttocontract@weltomedia.com' },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-8 sm:flex-row sm:items-center sm:px-8 sm:py-10">
        <div className="flex items-center">
          <div className="rounded-md bg-cream px-3 py-2">
            <Image
              src="/logos/stc-logo.png"
              alt="Subject To Contract"
              width={981}
              height={520}
              className="h-auto w-24"
            />
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream/80">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="transition-colors hover:text-cream"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
