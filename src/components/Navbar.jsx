import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { clinic } from "../config/clinic";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Doctor", "/doctor"],
  ["Treatments", "/treatments"],
  ["Facilities", "/facilities"],
  ["Reviews", "/testimonials"],
  ["FAQ", "/faq"],
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const navLinkClass = ({ isActive }) =>
    `relative font-sm transition-all duration-300 font-serif ${
      isActive
        ? "text-primary"
        : "text-gray-700 hover:text-primary"
    }`;

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/90 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
            : "bg-white/70 backdrop-blur-xl"
        }`}
      >
        <div className="container-custom">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-20" : "h-24"
            }`}
          >
            {/* Logo */}
            <Link
              to="/"
              className={`relative flex items-center justify-center overflow-visible transition-all duration-500 ${
                scrolled
                  ? "h-28 w-[200px]"
                  : "h-32 w-[250px]"
              }`}
            >
              <img
                src="/logo.png"
                alt={clinic.name}
                className={`absolute w-auto object-contain transition-all duration-500 ${
                  scrolled
                    ? "h-[200px]"
                    : "h-[250px]"
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {links.map(([label, to]) => (
                <NavLink
                  key={to}
                  to={to}
                  className={navLinkClass}
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 lg:flex font-serif">
              <Link
                to="/contact"
                className="rounded-full border border-primary px-6 py-3 font-medium text-primary transition-all hover:bg-primary hover:text-white"
              >
                Contact Us
              </Link>

              <Link
                to="/book-appointment"
                className="rounded-full bg-primary px-7 py-3 font-medium text-white shadow-[0_10px_30px_rgba(201,167,92,0.35)] transition-all hover:-translate-y-0.5 hover:bg-secondary"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden"
              aria-label="Open menu"
            >
              <HiOutlineMenuAlt3
                size={30}
                className="text-primary"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black/50 transition-all duration-300 ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="mb-8 flex items-center justify-between">
              <img
                src="/logo.png"
                alt={clinic.name}
                className="h-16 w-auto object-contain"
              />

              <button
                type="button"
                onClick={closeMobile}
                aria-label="Close menu"
              >
                <HiOutlineX
                  size={28}
                  className="text-primary"
                />
              </button>
            </div>

            <nav className="flex flex-col gap-5">
              {links.map(([label, to]) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={closeMobile}
                  className={navLinkClass}
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-8 grid gap-3">
              <Link
                to="/contact"
                onClick={closeMobile}
                className="rounded-full border border-primary py-3 text-center font-medium text-primary"
              >
                Contact Us
              </Link>

              <Link
                to="/book-appointment"
                onClick={closeMobile}
                className="rounded-full bg-primary py-3 text-center font-medium text-white"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;