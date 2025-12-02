import { useState, useEffect, useRef } from "react";
import { Menu, X, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Beranda" },
    { id: "about", label: "Tentang Kami" },
    { id: "produk", label: "Produk" },
    { id: "contact", label: "Kontak" },
  ];

  const whatsappUrl = "https://wa.me/6289521689687?text=Halo%20SR%20Motor%2C%20saya%20ingin%20konsultasi.";

  const mobileMenuBorder = isScrolled
    ? "border-t border-border/50"
    : "border-t border-white/20";

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 shadow-lg" : "bg-accent-dark/95"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-xl font-bold transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                SR<span className="text-primary"> Motor</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-primary transition-colors font-medium ${
                    isScrolled ? "text-foreground/80" : "text-white/90"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#f9611f] text-white font-semibold px-5 py-2 transition-colors duration-200 hover:bg-white hover:text-[#f9611f] border border-transparent hover:border-[#f9611f]"
              >
                Hubungi Kami
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden rounded-xl border transition-colors duration-200 ${
                isMobileMenuOpen
                  ? "bg-[#f9611f] text-white border-[#f9611f]/40 hover:bg-[#f9611f]"
                  : `${
                      isScrolled
                        ? "text-foreground border-border"
                        : "text-white border-transparent"
                    } hover:bg-[#f9611f] hover:text-white`
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-out transform ${
              isMobileMenuOpen
                ? `max-h-[480px] opacity-100 translate-y-0 py-4 space-y-2 ${mobileMenuBorder}`
                : "max-h-0 opacity-0 -translate-y-4 py-0 border-t border-transparent pointer-events-none"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 rounded-xl font-semibold transition-colors duration-150 ${
                  isScrolled ? "text-foreground/80" : "text-white/90"
                } hover:bg-[#f9611f]/20 hover:text-[#f9611f]`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="block text-center rounded-xl font-semibold px-4 py-3 bg-[#f9611f] text-white transition-colors duration-200 hover:bg-white hover:text-[#f9611f]"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
