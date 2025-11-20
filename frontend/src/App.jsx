// frontend/src/App.jsx
import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import CowCraft from './pages/CowCraft'
import FlexiGlam from './pages/FlexiGlam'
import ContactForm from './components/ContactForm'
import './styles/index.css'

export default function App(){
  return (
    <BrowserRouter>
      <SiteHeader />
      <main className="pt-32">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cow" element={<CowCraft/>} />
          <Route path="/flexi" element={<FlexiGlam/>} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </main>
      <SiteFooter />
    </BrowserRouter>
  )
}

function SiteHeader(){
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <header className="fixed w-full top-0 left-0 z-40 bg-white/70 backdrop-blur-md border-b border-white/40 shadow-sm">
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo + text larger */}
<Link
  to="/"
  className="flex items-center gap-3 focus:outline-none focus:ring-0 active:outline-none active:ring-0"
>
          <img src="/src/assets/logo-shunya.png" alt="Shunya logo" className="h-[4rem] w-auto" />
          <div className="hidden md:block leading-tight">
            <div className="text-2xl font-extrabold tracking-tight text-shunyaDark">Shunya</div>
            <div className="text-sm text-gray-600 font-medium">Cow Craft Naturals • Flexi Glam</div>
          </div>
        </Link>

        {/* Larger nav text */}
        <nav className="hidden md:flex items-center gap-8 text-[1.05rem] font-medium">
          <Link
            to="/cow"
            className={`nav-underline interactive hover-raise ${
              currentPath === '/cow'
                ? 'font-semibold text-shunyaMid border-b-2 border-shunyaMid'
                : 'text-gray-700'
            }`}
          >
            Cow Craft
          </Link>

          <Link
            to="/flexi"
            className={`nav-underline interactive hover-raise ${
              currentPath === '/flexi'
                ? 'font-semibold text-shunyaMid border-b-2 border-shunyaMid'
                : 'text-gray-700'
            }`}
          >
            Flexi Glam
          </Link>

          <Link
            to="/contact"
            className="px-4 py-2.5 rounded-md bg-shunyaMid text-white text-[1rem] gradient-outline interactive hover-raise shadow-md"
          >
            Contact Us
          </Link>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

/* MobileMenu: controlled, auto-close on navigation, outside-click to close */
function MobileMenu(){
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const containerRef = useRef(null)

  // Close menu when route changes (user navigates)
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Click outside to close
  useEffect(() => {
    function onDocClick(e){
      if (!containerRef.current) return
      if (!containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('click', onDocClick)
      document.addEventListener('touchstart', onDocClick)
    }
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('touchstart', onDocClick)
    }
  }, [open])

  function handleNavigate(path){
    // navigate then close
    navigate(path)
    setOpen(false)
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Toggle button */}
      <button
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(o => !o)}
        className="px-4 py-2 rounded-md bg-white/80 border text-base font-medium flex items-center gap-2 shadow-sm"
      >
        <svg
          className={`w-5 h-5 transition-transform ${open ? 'rotate-90' : ''}`}
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span className="font-medium">{open ? 'Close' : 'Menu'}</span>
      </button>

      {/* Animated dropdown */}
      <div
        id="mobile-menu"
        role="menu"
        aria-hidden={!open}
        className={`absolute right-0 mt-3 w-64 rounded-xl backdrop-blur-md border border-white/40 shadow-xl bg-white/80 transition-all duration-250 ease-out transform origin-top-right ${
          open ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-3 scale-95 pointer-events-none'
        }`}
      >
        <ul className="py-2">
          <li>
            <button
              onClick={() => handleNavigate('/cow')}
              role="menuitem"
              className="w-full text-left block px-5 py-3 text-lg hover:bg-shunyaLight/50 rounded-md text-shunyaDark"
            >
              Cow Craft
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigate('/flexi')}
              role="menuitem"
              className="w-full text-left block px-5 py-3 text-lg hover:bg-shunyaLight/50 rounded-md text-shunyaDark"
            >
              Flexi Glam
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigate('/contact')}
              role="menuitem"
              className="w-full text-left block px-5 py-3 text-lg hover:bg-shunyaLight/50 rounded-md text-shunyaDark"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

function SiteFooter(){
  return (
    <footer className="mt-28 border-t border-white/30 bg-white/60 backdrop-blur-md py-10 text-base">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-700">
        <div>Shunya — parent company for Cow Craft Naturals & Flexi Glam</div>
        <div className="mt-3">
          Contact: <a href="mailto:info@shunya.com" className="underline font-medium">info@shunya.com</a> | Phone: +91-9988776655
        </div>
        <div className="mt-3 text-sm">© {new Date().getFullYear()} Shunya</div>
      </div>
    </footer>
  )
}
