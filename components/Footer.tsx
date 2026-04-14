import Link from "next/link";
import { Mail, ExternalLink, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ background: "var(--anthracite)", color: "#e7e5e4" }}
      className="mt-auto"
    >
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-bold text-lg text-white mb-2">
              Antoine<span style={{ color: "var(--accent)" }}>.</span>
            </p>
            <p className="text-sm" style={{ color: "#a8a29e" }}>
              Étudiant ingénieur à l&apos;ENSAM
              <br />
              Ingénierie industrielle
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#a8a29e" }}>
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "À propos" },
                { href: "/competences", label: "Compétences" },
                { href: "/projects", label: "Projets" },
                { href: "/cv", label: "CV" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                    style={{ color: "#a8a29e" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#a8a29e" }}>
              Contact
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "#a8a29e" }}>
              <li>
                <a
                  href="mailto:antoine.clavieres@ensam.eu"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={14} />
                  antoine.clavieres@ensam.eu
                </a>
              </li>
              <li>
                <a
                  href="tel:+33695711994"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={14} />
                  06 95 71 19 94
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/antoine-clavieres-734a522b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <ExternalLink size={14} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-6 text-xs text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "#78716c" }}
        >
          © {year} Antoine Clavières — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
