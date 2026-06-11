import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiChevronDown,
} from "react-icons/hi";

const treatmentCategories = [
  {
    title: "Skin Treatments",
    items: [
      "Acne Treatment",
      "Acne Scar Treatment",
      "Pigmentation Treatment",
      "Chemical Peels",
      "HydraFacial",
      "Skin Brightening",
      "Anti Aging",
    ],
  },
  {
    title: "Hair Treatments",
    items: [
      "PRP Therapy",
      "Hair Loss Treatment",
      "Hair Restoration",
    ],
  },
  {
    title: "Cosmetic Treatments",
    items: [
      "Botox",
      "Dermal Fillers",
      "Laser Treatments",
      "Skin Tightening",
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative font-medium transition-all duration-300 ${
      isActive
        ? "text-primary"
        : "text-gray-700 hover:text-primary"
    }`;

  return (
    <>
      <header
        className="
          sticky
          top-0
          z-50
          bg-white/80
          backdrop-blur-xl
          border-b
          border-gray-100
          shadow-sm
        "
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-24">

            {/* Logo */}

            <Link
              to="/"
              className="relative flex items-center justify-center w-[200px] h-28 overflow-visible"
            >
              <img
                src="/logo.png"
                alt="Skin Sanctuary"
                className="absolute h-[200px] w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex items-center gap-10">

              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>

              {/* Treatments Mega Menu */}

              <div className="relative group">

                <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-primary transition duration-300">
                  Treatments
                  <HiChevronDown size={18} />
                </button>

                <div
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    top-full
                    mt-6
                    w-[900px]
                    rounded-3xl
                    bg-white
                    p-8
                    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                    opacity-0
                    invisible
                    group-hover:opacity-100
                    group-hover:visible
                    transition-all
                    duration-300
                  "
                >
                  <div className="grid grid-cols-3 gap-10">

                    {treatmentCategories.map((category) => (
                      <div key={category.title}>
                        <h4 className="mb-4 text-primary font-semibold">
                          {category.title}
                        </h4>

                        <ul className="space-y-3">

                          {category.items.map((item) => (
                            <li key={item}>
                              <Link
                                to="/treatments"
                                className="text-gray-600 hover:text-primary transition duration-300"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}

                        </ul>
                      </div>
                    ))}

                  </div>
                </div>
              </div>

              <NavLink to="/doctor" className={navLinkClass}>
                Doctor
              </NavLink>

              <NavLink to="/gallery" className={navLinkClass}>
                Results
              </NavLink>

              <NavLink to="/testimonials" className={navLinkClass}>
                Reviews
              </NavLink>

            </nav>

            {/* CTA Buttons */}

            <div className="hidden lg:flex items-center gap-3">

              <a
                href="tel:+919440052251"
                className="
                  px-5
                  py-3
                  rounded-full
                  border
                  border-primary
                  text-primary
                  font-medium
                  hover:bg-primary
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                Call Now
              </a>

              <Link
                to="/contact"
                className="
                  px-6
                  py-3
                  rounded-full
                  bg-primary
                  text-white
                  font-medium
                  hover:bg-secondary
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-primary/20
                "
              >
                Book Appointment
              </Link>

            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden"
            >
              <HiOutlineMenuAlt3
                size={30}
                className="text-primary"
              />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Overlay */}

      <div
        className={`fixed inset-0 z-[100] bg-black/50 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-all duration-300 ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          <div className="p-6">

            <div className="flex items-center justify-between mb-10">

              <img
                src="/logo.png"
                alt="Skin Sanctuary"
                className="h-16 w-auto object-contain"
              />

              <button
                onClick={() => setMobileOpen(false)}
              >
                <HiOutlineX
                  size={28}
                  className="text-primary"
                />
              </button>

            </div>

            <nav className="flex flex-col gap-6">

              <NavLink
                to="/"
                onClick={() => setMobileOpen(false)}
                className={navLinkClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMobileOpen(false)}
                className={navLinkClass}
              >
                About
              </NavLink>

              <NavLink
                to="/treatments"
                onClick={() => setMobileOpen(false)}
                className={navLinkClass}
              >
                Treatments
              </NavLink>

              <NavLink
                to="/doctor"
                onClick={() => setMobileOpen(false)}
                className={navLinkClass}
              >
                Doctor
              </NavLink>

              <NavLink
                to="/gallery"
                onClick={() => setMobileOpen(false)}
                className={navLinkClass}
              >
                Results
              </NavLink>

              <NavLink
                to="/testimonials"
                onClick={() => setMobileOpen(false)}
                className={navLinkClass}
              >
                Reviews
              </NavLink>

            </nav>

            <div className="mt-10 flex flex-col gap-3">

              <a
                href="tel:+919440052251"
                className="
                  w-full
                  text-center
                  py-3
                  rounded-full
                  border
                  border-primary
                  text-primary
                  font-medium
                "
              >
                Call Now
              </a>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="
                  w-full
                  text-center
                  py-3
                  rounded-full
                  bg-primary
                  text-white
                  font-medium
                "
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
