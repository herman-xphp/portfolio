import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Footer from "./Footer";

// Constants
const NAV_LINKS = [
  { to: "#home", label: "Home", id: "home" },
  { to: "#about", label: "About", id: "about" },
  { to: "#projects", label: "Projects", id: "projects" },
  { to: "#skills", label: "Skills", id: "skills" },
  { to: "#contact", label: "Contact", id: "contact" },
];

// Custom hook for scroll tracking
const useScrollTracking = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef({});
  const [lockActive, setLockActive] = useState(false);
  const scrollEndTimeout = useRef(null);

  // Handler for navbar click
  const handleNavClick = (id) => {
    setActiveSection(id);
    setLockActive(true);
    if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
  };

  // Effect: unlock scroll tracking after scroll ends (200ms after last scroll event)
  useEffect(() => {
    if (!lockActive) return;
    const unlockOnScrollEnd = () => {
      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
      scrollEndTimeout.current = setTimeout(() => {
        setLockActive(false);
      }, 200);
    };
    window.addEventListener("scroll", unlockOnScrollEnd, { passive: true });
    return () => {
      window.removeEventListener("scroll", unlockOnScrollEnd);
      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
    };
  }, [lockActive]);

  useEffect(() => {
    const handleScroll = () => {
      if (lockActive) return; // ignore scroll tracking if locked
      const sectionIds = NAV_LINKS.map((link) => link.id);
      let currentSection = sectionIds[0];
      let minTop = Infinity;
      let lastNegativeTopSection = sectionIds[0];
      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const ref = sectionRefs.current[id];
        if (ref) {
          const top = ref.getBoundingClientRect().top;
          if (top >= 0 && top < minTop) {
            minTop = top;
            currentSection = id;
          }
          if (top < 0) {
            lastNegativeTopSection = id;
          }
        }
      }
      // Jika tidak ada section yang top >= 0, pakai section terakhir yang top < 0
      if (minTop === Infinity) {
        currentSection = lastNegativeTopSection;
      }
      // Jika sudah di paling bawah halaman, paksa ke contact
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2 // toleransi 2px
      ) {
        currentSection = "contact";
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lockActive]);

  return { activeSection, sectionRefs, handleNavClick };
};

// Navbar Component with logo left, menu right, and animated dot underline
const Navbar = React.memo(({ activeSection, handleNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRefs = useRef({});

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Smooth scroll to section and lock active
  const handleMenuClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      handleNavClick(id);
    }
    closeMenu();
  };

  // Get position for animated dot underline
  const [dotProps, setDotProps] = useState({ left: 0, width: 0 });
  useEffect(() => {
    const ref = menuRefs.current[activeSection];
    if (ref) {
      const rect = ref.getBoundingClientRect();
      const parentRect = ref.parentElement.getBoundingClientRect();
      setDotProps({ left: rect.left - parentRect.left, width: rect.width });
    }
  }, [activeSection, isMenuOpen]);

  return (
    <nav className="bg-gray-900/90 backdrop-blur-sm border-b border-gray-700 text-white px-3 md:px-8 py-2 md:py-3 shadow-md sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-bold text-lg text-white hover:text-blue-400 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="text-base font-bold text-white">JD</span>
          </div>
          <span className="hidden sm:inline">Herman</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 items-center ml-auto relative">
          {NAV_LINKS.map((link) => (
            <a
              key={link.to}
              href={link.to}
              ref={(el) => (menuRefs.current[link.id] = el)}
              onClick={(e) => handleMenuClick(e, link.id)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-800 text-base relative ${
                activeSection === link.id
                  ? "text-white font-semibold"
                  : "text-gray-300"
              }`}
            >
              {link.label}
            </a>
          ))}
          {/* Animated dot underline */}
          <AnimatePresence>
            {dotProps.width > 0 && (
              <motion.div
                key={activeSection}
                layoutId="nav-dot"
                className="absolute -bottom-1 flex justify-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  left: dotProps.left,
                  width: dotProps.width,
                }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{ left: dotProps.left, width: dotProps.width }}
              >
                <span
                  className="mx-auto block w-1.5 h-1.5 rounded-full bg-blue-500 shadow-lg"
                  style={{ marginTop: 4 }}
                ></span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center ml-auto">
          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white my-1 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="py-4 space-y-2 flex flex-col items-end pr-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.to}
              href={link.to}
              onClick={(e) => handleMenuClick(e, link.id)}
              className={`block px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-800 text-base text-right ${
                activeSection === link.id
                  ? "bg-gray-700 text-white font-semibold"
                  : "text-gray-300"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="inline-block ml-2 w-1.5 h-1.5 rounded-full bg-blue-500 align-middle"></span>
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
});

// Section Wrapper Component for non-Hero sections
const SectionWrapper = React.forwardRef(({ id, children }, ref) => (
  <section
    id={id}
    ref={ref}
    className="max-w-4xl mx-auto px-3 md:px-4 py-8 md:py-12 min-h-[60vh] scroll-mt-16 md:scroll-mt-20"
  >
    {children}
  </section>
));

// Main App Component
const App = () => {
  const { activeSection, sectionRefs, handleNavClick } = useScrollTracking();

  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.body.className = "bg-gray-900 min-h-screen";
  }, []);

  // Smooth scroll effect
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Memoized sections
  const sections = useMemo(
    () => [
      { id: "home", component: <Hero /> },
      { id: "about", component: <About /> },
      { id: "projects", component: <Projects /> },
      { id: "skills", component: <Skills /> },
      { id: "contact", component: <Contact /> },
    ],
    []
  );

  return (
    <div className="min-h-screen transition-all duration-300">
      <Navbar activeSection={activeSection} handleNavClick={handleNavClick} />

      {sections.map(({ id, component }) =>
        id === "home" ? (
          <section
            key={id}
            id={id}
            ref={(el) => (sectionRefs.current[id] = el)}
            className="scroll-mt-16 md:scroll-mt-20"
          >
            {component}
          </section>
        ) : (
          <SectionWrapper
            key={id}
            id={id}
            ref={(el) => (sectionRefs.current[id] = el)}
          >
            {component}
          </SectionWrapper>
        )
      )}

      <Footer />
    </div>
  );
};

export default App;
