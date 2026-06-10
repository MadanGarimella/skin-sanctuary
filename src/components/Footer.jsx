import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaStar,
} from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[#0F0B1A] text-white">

            {/* Background Glow */}

            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

            <div className="container-custom relative z-10">

                {/* Top Section */}

                <div className="grid lg:grid-cols-4 gap-12 py-20">

                    {/* Brand */}

                    <div>

                        <div
                            to="/"
                            className="relative flex items-center justify-center w-[200px] h-28 overflow-visible"
                        >
                            <img
                                src="/logo.png"
                                alt="Skin Scanctuary"
                                className="absolute h-[200px] w-auto object-contain"
                            />
                        </div>

                        <p className="text-gray-400 leading-relaxed">
                            Premium dermatology, hair restoration,
                            laser, and aesthetic treatments designed
                            to help you achieve healthier skin and
                            lasting confidence.
                        </p>

                        {/* Google Rating */}

                        <div className="mt-8 flex items-center gap-4">

                            <div className="flex text-yellow-400">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <span className="text-sm text-gray-300">
                                4.9/5 Google Rating
                            </span>

                        </div>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="font-semibold text-lg mb-6">
                            Quick Links
                        </h3>

                        <ul className="space-y-4 text-gray-400">

                            <li>
                                <a
                                    href="/"
                                    className="hover:text-primary transition"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/about"
                                    className="hover:text-primary transition"
                                >
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/treatments"
                                    className="hover:text-primary transition"
                                >
                                    Treatments
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/doctor"
                                    className="hover:text-primary transition"
                                >
                                    Doctor Profile
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/contact"
                                    className="hover:text-primary transition"
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>

                    {/* Treatments */}

                    <div>

                        <h3 className="font-semibold text-lg mb-6">
                            Popular Treatments
                        </h3>

                        <ul className="space-y-4 text-gray-400">

                            <li>Acne Treatment</li>
                            <li>Pigmentation Correction</li>
                            <li>HydraFacial</li>
                            <li>PRP Therapy</li>
                            <li>Hair Restoration</li>
                            <li>Botox & Fillers</li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="font-semibold text-lg mb-6">
                            Contact Us
                        </h3>

                        <div className="space-y-5 text-gray-400">

                            <div className="flex gap-3">

                                <FaMapMarkerAlt className="text-primary mt-1" />

                                <p>
                                    Hi-Tension Rd, above HDFC Bank, Sri Sai Baba Officer's Colony, Madhavapuri Colony, Sainikpuri, Hyderabad, Secunderabad, Telangana 500094
                                </p>

                            </div>

                            <div className="flex gap-3">

                                <FaPhoneAlt className="text-primary mt-1" />

                                <p>
                                    +91 94400 52251
                                </p>

                            </div>

                            <div className="flex gap-3">

                                <FaEnvelope className="text-primary mt-1" />

                                <p>

                                </p>

                            </div>

                        </div>

                        {/* CTA */}

                        <button
                            className="
                mt-8
                flex
                items-center
                gap-3
                bg-primary
                px-6
                py-3
                rounded-full
                hover:bg-secondary
                transition-all
                duration-300
              "
                        >
                            <FaWhatsapp />
                            WhatsApp Us
                        </button>

                    </div>

                </div>

                {/* Divider */}

                <div className="border-t border-white/10" />

                {/* Bottom */}

                <div
                    className="
            py-8
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-6
          "
                >

                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Skin Scanctuary.
                        All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-6">

                        <a
                            href="#"
                            className="
                w-10
                h-10
                rounded-full
                bg-white/5
                flex
                items-center
                justify-center
                hover:bg-primary
                transition-all
                duration-300
              "
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            className="
                w-10
                h-10
                rounded-full
                bg-white/5
                flex
                items-center
                justify-center
                hover:bg-primary
                transition-all
                duration-300
              "
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            className="
                w-10
                h-10
                rounded-full
                bg-white/5
                flex
                items-center
                justify-center
                hover:bg-primary
                transition-all
                duration-300
              "
                        >
                            <FaLinkedinIn />
                        </a>

                    </div>

                    <div className="flex gap-6 text-sm text-gray-500">

                        <a href="#">
                            Privacy Policy
                        </a>

                        <a href="#">
                            Terms & Conditions
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;