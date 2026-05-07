export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-black px-6 py-24 text-white sm:px-10 lg:px-20"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

            <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
                <div>
                    <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-white/50 sm:text-xs">
                        Contact Us
                    </p>

                    <h2 className="max-w-lg text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
                        Let’s build the future together.
                    </h2>

                    <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                        Contact Silverhound Enterprises in Panchkula for Digital Marketing, SEO &
                        Automation,Institutional furniture trading, Civil and General order supply
                        and Raw metal trading services across India.
                    </p>

                    <div className="mt-10 space-y-8">

                        {/* Address */}
                        <div>
                            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
                                Office Address
                            </p>

                            <p className="max-w-md text-sm leading-7 text-white/75 sm:text-base">
                                SCO 192, Sector 16,
                                <br />
                                Panchkula, Haryana 134113
                            </p>
                        </div>

                        {/* Email */}
                        <div>
                            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
                                Email
                            </p>

                            <a
                                href="mailto:rajansharma@silverhoundenterprises.com"
                                className="text-sm text-white/75 transition duration-300 hover:text-yellow-200"
                            >
                                rajansharma@silverhoundenterprises.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div>
                            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
                                Phone Number
                            </p>

                            <a
                                href="tel:+919805339145"
                                className="text-sm text-white/75 transition duration-300 hover:text-yellow-200"
                            >
                                +91 9805339145
                            </a>
                        </div>

                        {/* Maps Button */}
                        <div className="pt-2">
                            <a
                                href="https://maps.app.goo.gl/P1GscHX2AjjX2pbK9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.25em] text-white/70 transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                            >
                                Open Maps
                            </a>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
                    <iframe
                        src="https://www.google.com/maps?q=30.6953179,76.8393012&output=embed"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="contrast-125 brightness-95 saturate-125"
                    />
                </div>
            </div>
        </section>
    );
}