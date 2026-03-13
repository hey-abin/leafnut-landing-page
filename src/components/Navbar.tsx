import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "Product", "About", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-heading text-2xl font-semibold tracking-wide text-foreground">
          Leafnut
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="font-body text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
