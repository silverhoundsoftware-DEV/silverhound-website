"use client";

const services = [
  {
    title: "Digital Marketing Services",
    tag: "Brand Growth",
    description:
      "Result-driven digital marketing services designed to improve online visibility, generate leads, build brand awareness and support business growth across India.",
  },
  {
    title: "SEO & Automation Solutions",
    tag: "Smart Systems",
    description:
      "SEO services and automation solutions that help businesses improve search rankings, streamline workflows, reduce manual work and grow more efficiently.",
  },
  {
    title: "Institutional Furniture Trading",
    tag: "Commercial Supply",
    description:
      "Reliable institutional furniture trading and commercial furniture supply for offices, schools, institutions, workspaces and infrastructure projects.",
  },
  {
    title: "Civil & General Order Supplier",
    tag: "Project Supply",
    description:
      "Civil material supply and general order supplier services for businesses, contractors, institutions and project-based procurement requirements.",
  },
  {
    title: "Raw Metal Trading",
    tag: "Industrial Trade",
    description:
      "Raw metal trading services focused on dependable sourcing, industrial material supply, timely delivery and B2B trading requirements across India.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black px-6 py-28 text-white sm:px-10 lg:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(253,224,71,0.12),transparent_35%),linear-gradient(to_bottom,#000,rgba(255,255,255,0.03),#000)]" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-yellow-200/10 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-white/40">
              Our Services
            </p>

            <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
              Digital Marketing, SEO Automation, Trading and Supply services for growing businesses.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/55">
            We provide Digital Marketing services, SEO and Automation solutions,
            Institutional Furniture trading, Civil and General order supply and Raw metal
            trading for businesses, Institutions and Commercial projects.

          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-yellow-200/30 hover:bg-white/[0.07] ${index === 0 || index === 1
                ? "lg:col-span-6"
                : "lg:col-span-4"
                }`}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-yellow-200/0 blur-2xl transition duration-500 group-hover:bg-yellow-200/10" />

              <div className="mb-12 flex items-center justify-between">
                <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white/45">
                  {service.tag}
                </span>

                <span className="text-xs uppercase tracking-[0.3em] text-white/25">
                  0{index + 1}
                </span>
              </div>

              <h3 className="max-w-sm text-xl font-light leading-snug text-white sm:text-2xl">
                {service.title}
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                {service.description}
              </p>

              <div className="mt-10 h-px w-full bg-white/10">
                <div className="h-px w-0 bg-yellow-200 transition-all duration-700 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}