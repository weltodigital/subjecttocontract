import Image from 'next/image';

// When real screenshots are ready, drop them in /public/screenshots/ and pass
// `src` to <PreviewCard /> or replace the placeholder block in <PhoneFrame />.

type PreviewCardProps = {
  caption: string;
  headline: string;
  body: string;
};

function PreviewCard({ caption, headline, body }: PreviewCardProps) {
  return (
    <figure className="flex flex-col">
      <figcaption className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-forest/80 sm:text-[11px]">
        {caption}
      </figcaption>
      <div className="rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_10px_40px_-20px_rgba(27,67,50,0.25)] ring-1 ring-black/5">
        <p className="font-serif text-xl leading-snug text-ink sm:text-2xl">
          {headline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-inkLight sm:text-base">
          {body}
        </p>
      </div>
    </figure>
  );
}

const tldrItems = [
  {
    emoji: '🚨',
    text: "Renters' Rights Act now law - compliance clock ticking",
  },
  {
    emoji: '📬',
    text: 'Rent freeze ditched, tenanted listings surge 70%',
  },
  {
    emoji: '💻',
    text: 'Zoopla launches landlord hub for RRA compliance',
  },
  {
    emoji: '🤝',
    text: 'Connells adds 700 lettings units, NLG buys Kent inventory firm',
  },
  {
    emoji: '📡',
    text: 'Contradictory data - market stable or haemorrhaging depending who you ask',
  },
  {
    emoji: '🍻',
    text: "Buyer gazumped for £5k after rivals knocked on seller's door",
  },
];

function PhoneFrame() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      <div className="relative rounded-[2.75rem] border-[10px] border-ink bg-ink p-2 shadow-[0_30px_80px_-25px_rgba(15,61,46,0.45)]">
        <div className="absolute left-1/2 top-2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-ink" />

        <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-cream">
          {/* Replace this block with <Image src="/screenshots/issue.png" ... /> when ready. */}
          <div className="flex h-full flex-col">
            <div className="bg-cream px-5 pb-3 pt-9">
              <Image
                src="/logos/stc-logo.png"
                alt="Subject To Contract"
                width={981}
                height={520}
                className="h-auto w-20"
              />
              <p className="mt-2 font-serif text-[15px] leading-tight text-ink">
                The Renters&rsquo; Rights Act lands
              </p>
              <div aria-hidden="true" className="mt-3 h-px w-10 bg-forest" />
            </div>
            <div className="flex-1 px-5 pb-5 pt-3">
              <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.22em] text-forest">
                <span aria-hidden="true">⚡ </span>TLDR
              </p>
              <ul className="space-y-2.5">
                {tldrItems.map((item) => (
                  <li key={item.emoji} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-forest/10 text-[11px] leading-none"
                    >
                      {item.emoji}
                    </span>
                    <span className="font-serif text-[10.5px] leading-snug text-ink">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductPreview() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl lg:text-5xl">
            What you&rsquo;ll get each week
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="order-2 space-y-10 lg:order-1 lg:col-span-3">
            <PreviewCard
              caption="The Big Story"
              headline="The Renters&rsquo; Rights Act came into force on 1 May - the biggest lettings overhaul in a generation."
              body="Agents who prepped clients have a smooth ride. Those who hoped it&rsquo;d go away are in for a very difficult summer."
            />
            <PreviewCard
              caption="Sharp Signals"
              headline="The RRA data won&rsquo;t agree with itself - and that&rsquo;s the signal."
              body="Stable headlines mask Auction House data showing tenanted listings up 70%, 41% of landlords planning to exit, and a 31 May compliance deadline that could expose two million landlords to £7k fines."
            />
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <PhoneFrame />
          </div>

          <div className="order-3 space-y-10 lg:col-span-3">
            <PreviewCard
              caption="Movers & Shakers"
              headline="Connells adds 700 lettings units in a multi-branch deal."
              body="Plus NLG&rsquo;s Kent inventory acquisition and Carter Jonas&rsquo;s new equity partner - the three deals that move the dial this week."
            />
            <PreviewCard
              caption="The Watercooler"
              headline="Buyer gazumped for £5k after rivals knocked on the seller&rsquo;s door."
              body="Two weeks post-offer, a 1% bump knocked the original buyer out. Welcome to 2026, where some buyers have decided agents are optional."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
