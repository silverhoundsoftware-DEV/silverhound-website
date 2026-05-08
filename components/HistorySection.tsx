"use client";

const milestones = [
  {
    year: "2020",
    title: "B2B Bakery Supply",
    description:
      "Built our foundation through commercial bakery supply and baked goods distribution.",
  },
  {
    year: "2021",
    title: "Raw Metal Trading",
    description:
      "Expanded into industrial material sourcing, supply movement and raw metal trade.",
  },
  {
    year: "2022",
    title: "NFT & Crypto Ventures",
    description:
      "Explored blockchain-led opportunities across digital assets, NFTs and cryptocurrency.",
  },
  {
    year: "2023",
    title: "Furniture Trading",
    description:
      "Entered furniture trading, strengthening product distribution and commercial trade.",
  },
  {
    year: "2025",
    title: "Digital & Automation",
    description:
      "Moved into digital marketing, advertising and automation-led business solutions.",
  },
];

export default function HistorySection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-6 py-28 text-white sm:px-10 lg:px-20"
    >
      <div className="absolute inset-0 bg-[url('/history-bg.png')] bg-cover bg-center opacity-90" />

      <div className="absolute inset-0 bg-black/15" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-white/40">
            Our Business Journey
          </p>

          <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
            Built across Trading, Digital innovation, Supply and Business automation.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55">
            Silverhound Enterprises has grown through diverse business verticals including
            B2B supply, Raw metal trading, Furniture trading, Digital marketing, SEO and
            Automation solutions — Creating a strong foundation for modern business
            services across India.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden min-h-[620px] lg:block">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-white/20" />

          <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 items-center justify-between">
            {milestones.map((item, index) => {
              const isTop = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className="group relative flex w-1/5 animate-[fadeUp_0.9s_ease_both] justify-center"
                  style={{ animationDelay: `${index * 160}ms` }}
                >
                  <div className="relative h-20 w-36 transition duration-500 group-hover:scale-105">
                    <div className="absolute inset-0 bg-white/75 backdrop-blur-md [clip-path:polygon(0_0,82%_0,100%_50%,82%_100%,0_100%,16%_50%)]" />
                    <div className="absolute inset-[1px] bg-white/10 [clip-path:polygon(0_0,82%_0,100%_50%,82%_100%,0_100%,16%_50%)]" />
                  </div>

                  <div className="absolute left-1/2 top-1/2 z-20 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black shadow-xl shadow-black/40">
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-200 transition duration-500 group-hover:scale-150" />
                  </div>

                  <div
                    className={`absolute left-1/2 w-px -translate-x-1/2 bg-white/25 ${isTop ? "bottom-1/2 h-24" : "top-1/2 h-24"
                      }`}
                  />

                  <div
                    className={`absolute left-1/2 w-[210px] -translate-x-1/2 rounded-3xl border border-white/10 bg-black/35 p-5 backdrop-blur-xl transition duration-500 group-hover:-translate-y-1 group-hover:border-yellow-200/25 group-hover:bg-white/[0.06] ${isTop
                      ? "bottom-[calc(50%+6rem)]"
                      : "top-[calc(50%+6rem)]"
                      }`}
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[11px] text-white/60">
                      0{index + 1}
                    </div>

                    <h3 className="text-2xl font-light text-white">
                      {item.year}
                    </h3>

                    <p className="mt-2 text-[13px] font-medium text-white/90">
                      {item.title}
                    </p>

                    <p className="mt-2 text-[11px] leading-5 text-white/55">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="relative space-y-6 lg:hidden">
          <div className="absolute bottom-0 left-[21px] top-0 w-px bg-white/15" />

          {milestones.map((item, index) => (
            <div
              key={item.year}
              className="relative animate-[fadeUp_0.9s_ease_both] pl-14"
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <div className="absolute left-0 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black">
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-200" />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <p className="text-2xl font-light text-white">{item.year}</p>

                <h3 className="mt-2 text-sm font-medium text-white/90">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-white/55">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}