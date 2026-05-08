export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-14 text-white sm:px-10 lg:px-20">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">

                {/* Left Side */}
                <div className="max-w-md">
                    <img
                        src="/silverhound_logo_updated2.png"
                        alt="Silverhound Logo"
                        className="h-12 w-auto object-contain"
                    />

                    <p className="mt-6 text-sm leading-7 text-white/55">
                        Silverhound Enterprises operates across digital services,
                        industrial trade, institutional supply and automation-led business
                        solutions for modern enterprises.
                    </p>
                </div>

                {/* Right Side */}
                <div className="grid gap-10 sm:grid-cols-3">

                    {/* Navigation */}
                    <div>
                        <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-white/35">
                            Navigation
                        </p>

                        <div className="space-y-3">
                            <a
                                href="#home"
                                className="block text-sm text-white/60 transition duration-300 hover:text-yellow-200"
                            >
                                Home
                            </a>

                            <a
                                href="#about"
                                className="block text-sm text-white/60 transition duration-300 hover:text-yellow-200"
                            >
                                About
                            </a>

                            <a
                                href="#services"
                                className="block text-sm text-white/60 transition duration-300 hover:text-yellow-200"
                            >
                                Services
                            </a>

                            <a
                                href="#contact"
                                className="block text-sm text-white/60 transition duration-300 hover:text-yellow-200"
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-white/35">
                            Services
                        </p>

                        <div className="space-y-3 text-sm text-white/60">
                            <p>Digital Marketing</p>
                            <p>SEO & Automation</p>
                            <p>Furniture Trading</p>
                            <p>Raw Metal Trading</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-white/35">
                            Contact
                        </p>

                        <div className="space-y-3">
                            <a
                                href="mailto:rajansharma@silverhoundenterprises.com"
                                className="block text-sm text-white/60 transition duration-300 hover:text-yellow-200"
                            >
                                rajansharma@silverhoundenterprises.com
                            </a>

                            <a
                                href="tel:+919805339145"
                                className="block text-sm text-white/60 transition duration-300 hover:text-yellow-200"
                            >
                                +91 9805339145
                            </a>

                            <p className="max-w-xs text-sm leading-6 text-white/60">
                                SCO 192, Sector 16,
                                <br />
                                Panchkula,Haryana 134113
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
                <p>© 2026 Silverhound Enterprises. All rights reserved.</p>

                <p className="tracking-[0.2em]">
                    BUILT FOR MODERN ENTERPRISES
                </p>
            </div>
        </footer>
    );
}