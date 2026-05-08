import {
  NewspaperIcon,
  ChartBarIcon,
  UsersIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import type { ComponentType, SVGProps } from 'react';

type Tile = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  heading: string;
  body: string;
};

const tiles: Tile[] = [
  {
    icon: NewspaperIcon,
    heading: 'The biggest stories',
    body: "The week's most important property news, distilled into one sharp take per story.",
  },
  {
    icon: ChartBarIcon,
    heading: 'The numbers',
    body: "Halifax, Nationwide, Rightmove, BoE - all the data that's moving the market, with one line of context.",
  },
  {
    icon: UsersIcon,
    heading: 'Movers & shakers',
    body: 'The acquisitions, branch openings, and people moves shaping who runs UK property.',
  },
  {
    icon: LightBulbIcon,
    heading: 'One thing worth trying',
    body: 'A tactical tip you can use this week - marketing, ops, sales, or tech.',
  },
  {
    icon: ArrowTrendingUpIcon,
    heading: 'Sharp signals',
    body: "Trends others miss. The pattern across the week's stories that explains where the market's heading.",
  },
  {
    icon: SparklesIcon,
    heading: 'The watercooler',
    body: "A weekly serving of property's stranger stories, weird listings, and industry gossip.",
  },
];

export default function WhatsInIt() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl lg:text-5xl">
            Six minutes. Six things you&rsquo;ll actually want to read.
          </h2>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {tiles.map(({ icon: Icon, heading, body }) => (
            <li
              key={heading}
              className="rounded-2xl border border-ink/10 bg-white p-6 transition-colors hover:border-forest/30 sm:p-7"
            >
              <Icon className="h-7 w-7 text-forest" aria-hidden="true" strokeWidth={1.5} />
              <h3 className="mt-5 font-serif text-xl font-medium text-ink sm:text-2xl">
                {heading}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-inkLight sm:text-base">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
