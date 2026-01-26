import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, GraduationCap, Sparkles } from "lucide-react";
import { siteConfig } from "../../data/siteData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Beranda" },
    { path: "/tentang", label: "Tentang" },
    { path: "/program", label: "Program" },
    { path: "/biaya", label: "Biaya" },
    { path: "/tutor", label: "Tutor" },
    { path: "/testimoni", label: "Testimoni" },
    { path: "/faq", label: "FAQ" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-white py-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo with Animation */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/30">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  Bimbel
                </span>
                <span className="text-lg font-bold text-blue-600"> Cerdas</span>
              </div>
            </Link>

            {/* Desktop Navigation with Hover Effects */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isActive(link.path)
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Buttons with Animation */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 animate-wiggle" />
                <span className="hidden xl:inline">Konsultasi</span>
              </a>
              <Link
                to="/kontak"
                className="relative px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-500/25 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Daftar Sekarang
                </span>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </Link>
            </div>

            {/* Mobile Menu Button with Animation */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all hover:scale-105 active:scale-95"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`}
                />
                <X
                  className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation with Slide Animation */}
          <div
            className={`lg:hidden transition-all duration-500 overflow-hidden ${
              isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-1 pt-2 pb-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform ${
                    isActive(link.path)
                      ? "bg-blue-50 text-blue-600 translate-x-2"
                      : "text-gray-600 hover:bg-gray-50 hover:translate-x-2"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-gray-200" />
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-emerald-600 font-medium hover:bg-emerald-50 rounded-lg transition-all"
              >
                <Phone className="w-5 h-5 animate-pulse" />
                Konsultasi WhatsApp
              </a>
              <Link
                to="/kontak"
                onClick={() => setIsOpen(false)}
                className="mx-4 mt-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
