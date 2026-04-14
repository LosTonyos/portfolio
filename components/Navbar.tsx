"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#parcours", label: "Parcours" },
  { href: "#projects", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#contact", label: "Contact" },
];

const CV_LINK = "https://drive.google.com/file/d/1HyZQe8eJ5TVNZhMflzD6DpHCImKyR8bW/view?usp=drive_link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = ["hero", "parcours", "projects", "competences", "contact"];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      style={{
        background: "transparent",
        borderBottom: "none",
        transition: "all 0.3s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container-custom flex items-center justify-end h-16">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            const onHero = active === "hero";
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="px-4 py-2 rounded-md text-sm transition-all"
                style={{
                  color: isActive ? "var(--accent)" : onHero ? "rgba(255,255,255,0.85)" : "var(--anthracite)",
                  background: isActive && !onHero ? "rgba(217,119,6,0.08)" : "transparent",
                  fontWeight: isActive ? "600" : "500",
                }}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={CV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 rounded-md text-sm font-semibold transition-all"
            style={{
              background: "var(--accent)",
              color: "#fff",
              border: "none",
            }}
          >
            CV
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{ color: "var(--anthracite)" }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden border-t px-6 py-4 flex flex-col gap-2"
          style={{ borderColor: "var(--border)", background: "#fff" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="py-2 px-3 rounded-md text-sm font-medium"
              style={{ color: "var(--anthracite)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-3 rounded-md text-sm font-semibold text-center"
            style={{ background: "var(--anthracite)", color: "#fff" }}
          >
            CV
          </a>
        </nav>
      )}
    </header>
  );
}
