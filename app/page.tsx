import { Cog, Wrench, BarChart2, Monitor, Globe, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { skillCategories } from "@/data/skills";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import CareerTimeline from "@/components/CareerTimeline";

const iconMap: Record<string, React.ReactNode> = {
  Cog: <Cog size={18} style={{ color: "var(--accent)" }} />,
  Wrench: <Wrench size={18} style={{ color: "var(--accent)" }} />,
  BarChart2: <BarChart2 size={18} style={{ color: "var(--accent)" }} />,
  Monitor: <Monitor size={18} style={{ color: "var(--accent)" }} />,
  Globe: <Globe size={18} style={{ color: "var(--accent)" }} />,
};


export default function Home() {
  return (
    <>
      <HeroSection />

      {/* ══════════════════════════════════════
          PARCOURS PROFESSIONNEL
      ══════════════════════════════════════ */}
      <section id="parcours" className="section-padding">
        <div className="container-custom">
          <h2 className="heading-lg gradient-heading mb-2">À propos</h2>
          <div className="divider" />
          <CareerTimeline />
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROJETS
      ══════════════════════════════════════ */}
      <section id="projects" className="section-padding">
        <div className="container-custom">
          <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "var(--muted)" }}>
            Réalisations
          </p>
          <h2 className="heading-lg gradient-heading mb-2">Projets & expériences</h2>
          <div className="divider" />
          <p className="text-sm mt-4 mb-8 max-w-xl" style={{ color: "var(--muted)" }}>
            Stages industriels, projets académiques et réalisations personnelles.
          </p>

          <ProjectCarousel />
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMPÉTENCES
      ══════════════════════════════════════ */}
      <section id="competences" className="section-padding section-darker">
        <div className="container-custom">
          <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "var(--muted)" }}>
            Savoir-faire
          </p>
          <h2 className="heading-lg gradient-heading mb-2">Compétences</h2>
          <div className="divider" />
          <p className="text-sm mt-4 mb-10 max-w-xl" style={{ color: "var(--muted)" }}>
            Acquises à l&apos;ENSAM, en stages et à travers mes projets personnels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {skillCategories.map((category) => (
              <div key={category.title} className="card p-5">
                <div className="flex items-center gap-2 mb-4">
                  {iconMap[category.icon]}
                  <h3 className="text-sm font-semibold" style={{ color: "var(--anthracite)" }}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: "rgba(217,119,6,0.1)",
                        color: "var(--accent-dark)",
                        border: "1px solid rgba(217,119,6,0.2)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT
      ══════════════════════════════════════ */}
      <section id="contact" className="section-padding section-dark">
        <div className="container-custom">
          <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "var(--muted)" }}>
            Échangeons
          </p>
          <h2 className="heading-lg gradient-heading mb-2">Contact</h2>
          <div className="divider" />
          <p className="text-sm mt-4 mb-4" style={{ color: "var(--muted)", maxWidth: "50%" }}>
            Disponible pour une alternance ou simplement pour échanger. N&apos;hésitez pas à me contacter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10" style={{ alignItems: "start" }}>
            {/* Coordonnées */}
            <div className="space-y-5">
              {[
                { icon: <Mail size={18} style={{ color: "var(--accent)" }} />, label: "Email", value: "antoine.clavieres@ensam.eu", href: "mailto:antoine.clavieres@ensam.eu" },
                { icon: <Phone size={18} style={{ color: "var(--accent)" }} />, label: "Téléphone", value: "06 95 71 19 94", href: "tel:+33695711994" },
                { icon: <MapPin size={18} style={{ color: "var(--accent)" }} />, label: "Localisation", value: "Bordeaux, France", href: undefined },
                { icon: <ExternalLink size={18} style={{ color: "var(--accent)" }} />, label: "LinkedIn", value: "linkedin.com/in/antoine-clavieres-734a522b8", href: "https://www.linkedin.com/in/antoine-clavieres-734a522b8/" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(217,119,6,0.1)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide font-semibold mb-0.5" style={{ color: "var(--muted)" }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium transition-colors hover:text-[var(--accent)]"
                        style={{ color: "var(--anthracite)" }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: "var(--anthracite)" }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Formulaire */}
            <div style={{ marginTop: "-5rem" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
