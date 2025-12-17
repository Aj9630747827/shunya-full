// frontend/src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import CowCraft from "./pages/CowCraft";
import FlexiGlam from "./pages/FlexiGlam";
import About from "./pages/About";
import Careers from "./pages/Careers";
import ContactForm from "./components/ContactForm";
import "./styles/index.css";

/**
 * App - top-level router and layout
 */
export default function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <main className="pt-28"> {/* push down for fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cow" element={<CowCraft />} />
          <Route path="/flexi" element={<FlexiGlam />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <SiteFooter />
    </BrowserRouter>
  );
}

/* -------- SiteHeader (desktop + mobile) -------- */
function SiteHeader() {
  // local state for mobile menu open/close (so we can programmatically close)
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Ensure body scroll lock while mobile menu open (nice UX)
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  // Nav items (ordered)
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/cow", label: "Cow Craft" },
    { to: "/flexi", label: "Garment Accessories" },
    { to: "/about", label: "About Shunya" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact Us", cta: true },
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-40 bg-white/90 backdrop-blur-sm border-b border-white/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 outline-none focus:outline-none focus:ring-0" onClick={() => setMobileOpen(false)}>
          {/* Import logo as module in your header file instead of /src/... */}
<img
  src="/logo-shunya.png"
  alt="Shunya"
  className="h-14 md:h-16 lg:h-20 w-auto"
/>
          <div className="hidden md:block leading-tight">
            <div className="text-2xl font-extrabold tracking-tight text-shunyaDark">Shunya</div>
            <div className="text-sm text-gray-600 font-medium">Cow Craft Naturals • Garment Accessories </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-[1.05rem] font-medium">
          {navItems.map((it) => {
            const active = currentPath === it.to || (it.to !== "/" && currentPath.startsWith(it.to));
            return it.cta ? (
              <Link
                key={it.to}
                to={it.to}
                className="px-4 py-2.5 rounded-md bg-shunyaMid text-white text-[1rem] gradient-outline hover:shadow-md"
              >
                {it.label}
              </Link>
            ) : (
              <Link
                key={it.to}
                to={it.to}
                className={`nav-link interactive hover-raise ${
                  active ? "font-semibold text-shunyaMid border-b-2 border-shunyaMid pb-1" : "text-gray-700"
                }`}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <MobileMenu open={mobileOpen} setOpen={setMobileOpen} navItems={navItems} />
        </div>
      </div>
    </header>
  );
}

/* -------- MobileMenu component (controlled) -------- */
function MobileMenu({ open, setOpen, navItems }) {
  const navigate = useNavigate();

  function go(to) {
    setOpen(false); // collapse menu when user navigates
    navigate(to);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 rounded-md bg-white/80 border text-base shadow-sm"
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md p-3 z-50">
          {navItems.map((item) => (
            <button
              key={item.to}
              onClick={() => go(item.to)}
              className="block w-full text-left py-3 px-2 rounded hover:bg-gray-50 text-base"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* -------- Footer (small tweak) -------- */
function SiteFooter() {
  return (
    <footer className="mt-28 border-t border-white/30 bg-white/60 backdrop-blur-md py-10 text-base">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-700">
        <div>
          Shunya — parent company for Cow Craft Naturals & Garment Accessories
        </div>

        <div className="mt-3">
          Customer care: +91-9217270477
        </div>

        <div className="mt-2">
          Email:{" "}
          <a
            href="mailto:info@shunyaglobal"
            className="text-shunyaDark hover:underline"
          >
            info@shunya
          </a>
        </div>

        <div className="mt-3 text-sm">
          © {new Date().getFullYear()} Shunya
        </div>
      </div>
    </footer>
  );
}

