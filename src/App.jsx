import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Pricing from "./pages/Pricing";
import Tutors from "./pages/Tutors";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import { siteConfig } from "./data/siteData";

// Floating WhatsApp Button Component
const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=Halo, saya ingin bertanya tentang program bimbel`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat WhatsApp"
    >
      {/* Pulse rings */}
      <div className="absolute inset-0 w-14 h-14 bg-emerald-400 rounded-full animate-ping opacity-30"></div>
      <div className="absolute inset-0 w-14 h-14 bg-emerald-400 rounded-full animate-ping opacity-20 delay-300"></div>

      {/* Main button */}
      <div className="relative w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/40 hover:shadow-emerald-500/60 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group-hover:rotate-12">
        <MessageCircle className="w-7 h-7 text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-2 group-hover:translate-x-0">
        Chat WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900"></div>
      </div>

      {/* Notification badge */}
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce shadow-lg">
        1
      </div>
    </a>
  );
};

// Scroll to top on route change
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/program" element={<Programs />} />
            <Route path="/program/:level" element={<Programs />} />
            <Route path="/biaya" element={<Pricing />} />
            <Route path="/tutor" element={<Tutors />} />
            <Route path="/testimoni" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/kontak" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
