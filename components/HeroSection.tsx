export default function HeroSection() {
  return (
    <main
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/home-bg1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/45" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-16 pt-28 sm:px-10 lg:px-12 lg:pb-24">
        <div className="max-w-xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-white/60 sm:text-xs">
            Silverhound Enterprises
          </p>

          <h1 className="text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Digital Marketing, SEO Automation, Trading & Supply Solutions for Modern Businesses.
          </h1>

          <p className="mt-5 max-w-md text-sm font-light leading-6 text-white/70">
            Silverhound Enterprises provides Digital Marketing Services, SEO & Automation
            solutions, Institutional Furniture Trading, Civil and General order supply,
            and Raw metal trading services for businesses, Institutions, and Commercial
            projects across India.
          </p>
        </div>
      </section>
    </main>
  );
}