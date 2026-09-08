import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { LOGO } from "@/assets";
import SupportPanel from "../home/SupportPanel";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [supportPanelOpen, setSupportPanelOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // ================= SCROLL EFFECT =================
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ================= CLICK OUTSIDE SEARCH =================
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen) return;
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // ================= BODY SCROLL LOCK =================
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Join Us", path: "/join-us" },
    { name: "Contact", path: "/contact" },
  ];

  const programLinks = [
    { name: "All Programs", path: "/programs" },
    { name: "Education", path: "/programs?category=education" },
    { name: "Healthcare", path: "/programs?category=healthcare" },
    { name: "Environment", path: "/programs?category=environment" },
    { name: "Community", path: "/programs?category=community" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // Navigate to search results page with query
    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    setSearchOpen(false);
    setSearchQuery("");
  };
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass navbar-glass py-2 shadow-large"
          : "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-4"
      }`}
    >
      {/* Top Bar - Only visible when not scrolled */}
      <div
        className={`hidden lg:block transition-all duration-500 overflow-hidden ${
          isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between text-sm text-white/90">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 hover:text-orange-400 transition-all duration-300 cursor-pointer group">
                <svg className="w-4 h-4 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 917889294572
              </span>
              <span className="flex items-center gap-2 hover:text-orange-400 transition-all duration-300 cursor-pointer group">
                <svg className="w-4 h-4 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@onewayfoundation.info
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/share/17uZ3sf7DP/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/oneway_foundation/status/1715678901234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/oneway_foundation_?igsh=OGUwOGNueGJvcm8z"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/oneway-foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* ===== LOGO ===== */}
          <Link
            to="/"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="flex items-center gap-4">
            <img 
                src={LOGO} 
                alt="Oneway Foundation Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain rounded-full shadow-md bg-white p-1 transition-all duration-300"
              />

              <div className="leading-tight">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide">
                  ONEWAY
                </h1>
                <p className="text-orange-400 font-semibold text-xs sm:text-sm tracking-widest">
                  FOUNDATION
                </p>
              </div>
            </div>
          </Link>
          {/* ===== DESKTOP MENU ===== */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative group ${
                    isActive
                      ? isScrolled
                        ? "text-orange-600"
                        : "text-orange-400"
                      : isScrolled
                      ? "text-slate-700 hover:text-orange-600 hover:bg-orange-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-0 bg-orange-500/10 rounded-xl transition-all duration-300 ${
                        isActive ? "w-full" : "group-hover:w-full"
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 transition-all duration-300 ${
                        isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* Programs Dropdown */}
            <div className="relative group">
              <button
                className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isScrolled
                    ? "text-slate-700 hover:text-orange-600 hover:bg-orange-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                Programs
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-large opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50">
                <div className="py-3">
                  {programLinks.map((link, index) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-5 py-3 mx-2 rounded-xl text-sm transition-all duration-200 ${
                          isActive
                            ? "text-orange-600 bg-orange-50"
                            : "text-slate-700 hover:text-orange-600 hover:bg-orange-50"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            index === 0 ? "bg-orange-500 animate-pulse" : "bg-slate-300"
                          }`}
                        />
                        {link.name}
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Support 24/7 Button */}
            <button
              onClick={() => setSupportPanelOpen(true)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                isScrolled
                  ? "text-orange-600 bg-orange-50 hover:bg-orange-100"
                  : "text-orange-400 bg-orange-500/20 hover:bg-orange-500/30"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Support 24/7
            </button>
          </nav>

          {/* ===== RIGHT SIDE ACTIONS ===== */}
          <div className="flex items-center gap-3">
            {/* Search Button */}
            <div className="relative" ref={searchRef}>
              <button
                aria-label="Open Search"
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:scale-110 ${
                  isScrolled
                    ? "text-slate-700 hover:bg-slate-100 hover:text-orange-600"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              {/* Search Dropdown */}
              <div
                className={`absolute right-0 top-full mt-3 w-80 bg-white rounded-2xl shadow-large transition-all duration-300 ${
                  searchOpen
                    ? "opacity-100 visible transform translate-y-0"
                    : "opacity-0 invisible transform -translate-y-4"
                }`}
              >
                <form onSubmit={handleSearch} className="p-4">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="input-field pl-12"
                    />
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </form>
              </div>
            </div>

            {/* Donate Button */}
            <Link
              to="/donate"
              className={`hidden sm:flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-500 transform hover:scale-105 hover:shadow-glow-lg ${
                isScrolled
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/30"
                  : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-400 hover:to-orange-500 shadow-lg shadow-orange-500/40"
              }`}
            >
              <svg
                className="w-5 h-5 animate-bounce"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
              Donate Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle mobile menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className={`xl:hidden p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                isScrolled
                  ? "text-slate-700 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div
        id="mobile-menu"
        className={`xl:hidden fixed inset-0 top-[72px] bg-white/98 backdrop-blur-xl z-40 transition-all duration-500 overflow-y-auto ${
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="p-6">
          {/* Mobile Search */}
          <div className="mb-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="input-field pl-12"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
          </div>

          {/* Mobile Donate Button */}
          <Link
            to="/donate"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full mb-6 px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl transition-all duration-300 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/30 hover:shadow-xl"
          >
            <svg className="w-5 h-5 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path
                fillRule="evenodd"
                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                clipRule="evenodd"
              />
            </svg>
            Donate Now
          </Link>

          {/* Mobile Navigation Links */}
          <nav className="space-y-2">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-orange-600 bg-orange-50"
                      : "text-slate-700 hover:bg-slate-50 hover:text-orange-600 hover:pl-8"
                  }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Programs Dropdown */}
            <div className="pt-2">
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className="flex items-center justify-between w-full px-6 py-4 rounded-2xl text-base font-semibold text-slate-700 hover:bg-slate-50 transition-all duration-300"
              >
                Programs
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    programsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  programsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 space-y-2 mt-3 border-l-2 border-orange-200 ml-5">
                  {programLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setProgramsOpen(false);
                      }}
                      className={({ isActive }) =>
                        `block px-5 py-3 rounded-xl text-sm transition-all duration-200 ${
                          isActive
                            ? "text-orange-600 bg-orange-50"
                            : "text-slate-600 hover:text-orange-600 hover:bg-orange-50"
                        }`}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Social Links */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-sm text-slate-500 mb-4 font-medium">Follow us</p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/share/17uZ3sf7DP/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 text-slate-600 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/oneway_foundation/status/1715678901234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 text-slate-600 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/oneway_foundation_?igsh=OGUwOGNueGJvcm8z"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 text-slate-600 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/oneway-foundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 text-slate-600 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`xl:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Support Panel */}
      <SupportPanel 
        isOpen={supportPanelOpen} 
        onClose={() => setSupportPanelOpen(false)} 
      />
    </header>
  );
};

export default Navbar;
