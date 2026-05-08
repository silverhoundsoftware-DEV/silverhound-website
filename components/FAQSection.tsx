"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services does Silverhound Enterprises provide?",
    answer:
      "Silverhound Enterprises provides Digital Marketing services, SEO and Automation solutions, Institutional furniture trading, Civil and General order supply and Raw metal trading services.",
  },
  {
    question: "Do you provide Digital Marketing and SEO services in Panchkula?",
    answer:
      "Yes. We provide Digital Marketing, SEO, Digital advertising and Automation solutions for businesses in Panchkula, Haryana and across India.",
  },
  {
    question: "Do you offer institutional furniture trading and supply?",
    answer:
      "Yes. We provide Institutional furniture trading and Commercial furniture supply for Offices, Schools, Institutions, Commercial spaces and Project requirements.",
  },
  {
    question: "Do you work as a Civil and General order supplier?",
    answer:
      "Yes. Silverhound Enterprises supports Civil material supply, General order supply, Procurement needs and Project-based business requirements.",
  },
  {
    question: "Do you provide Raw metal trading services?",
    answer:
      "Yes. We provide Raw metal trading services for Businesses and Industrial clients with a focus on reliable sourcing, quality supply and timely execution.",
  },
  {
    question: "Where is Silverhound Enterprises located?",
    answer:
      "Silverhound Enterprises is located at SCO 192, Sector 16, Panchkula, Haryana 134113.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-black px-6 py-28 text-white sm:px-10 lg:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(253,224,71,0.12),transparent_35%),linear-gradient(to_bottom,#000,#080808,#000)]" />
      <div className="absolute -right-24 top-20 h-80 w-80 animate-pulse rounded-full bg-yellow-200/10 blur-3xl" />
      <div className="absolute -left-24 bottom-20 h-72 w-72 animate-pulse rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="animate-[fadeUp_0.8s_ease_both]">
          <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-white/40">
            FAQ
          </p>

          <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
            Answers before we start building together.
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
            Explore common questions about our services, Trading capabilities,
            Supply support and Digital solutions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="group animate-[fadeUp_0.8s_ease_both] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-yellow-200/25 hover:bg-white/[0.07]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="hidden text-xs uppercase tracking-[0.25em] text-yellow-200/50 sm:block">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-medium text-white/85 transition duration-300 group-hover:text-white sm:text-base">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg text-yellow-200 transition duration-300 ${isOpen ? "rotate-180 bg-yellow-200 text-black" : ""
                      }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pl-6 text-sm leading-7 text-white/55 sm:pl-[5.8rem]">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                <div className="h-px w-full bg-white/10">
                  <div
                    className={`h-px bg-yellow-200 transition-all duration-700 ${isOpen ? "w-full" : "w-0"
                      }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
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