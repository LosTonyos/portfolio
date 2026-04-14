"use client";

import { useState } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const formation = [
  {
    period: "2023 – 2026",
    title: "Bachelor de Technologie",
    subtitle: "Arts et Métiers — Campus de Bordeaux",
    current: true,
  },
  {
    period: "2020 – 2023",
    title: "Baccalauréat Technologique (STI2D)",
    subtitle: "Lycée Gustave Eiffel",
    current: false,
  },
];

const experiences = [
  {
    period: "2026",
    duration: "6 mois",
    title: "Institut Français de la Vigne et du Vin",
    subtitle: "Blanquefort — Stage assistant-ingénieur",
    logo: "/images/logos/ifvv.png",
    initials: "IFV",
    current: true,
  },
  {
    period: "2025",
    duration: "3 mois",
    title: "Yacht Solutions",
    subtitle: "Bordeaux — Stage technicien",
    logo: "/images/logos/yacht-solutions.png",
    initials: "YS",
    current: false,
  },
  {
    period: "2024",
    duration: "1 mois",
    title: "CNB",
    subtitle: "Bordeaux — Stage ouvrier",
    logo: "/images/logos/cnb.png",
    initials: "CNB",
    current: false,
  },
];

function LogoBox({ logo, initials }: { logo: string; initials: string }) {
  const [errored, setErrored] = useState(false);
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 8,
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      {!errored ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt={initials}
          style={{ width: "100%", height: "100%", objectFit: "contain", padding: 4 }}
          onError={() => setErrored(true)}
        />
      ) : (
        <span style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.02em" }}>
          {initials}
        </span>
      )}
    </div>
  );
}

function TimelineDot({ current }: { current: boolean }) {
  return (
    <div
      style={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: current ? "var(--accent)" : "transparent",
        border: current ? "2px solid var(--accent)" : "2px solid rgba(255,255,255,0.3)",
        boxShadow: current ? "0 0 8px rgba(217,119,6,0.6)" : "none",
        flexShrink: 0,
        marginTop: 4,
      }}
    />
  );
}

export default function CareerTimeline() {
  return (
    <div>
      {/* ── Description pleine largeur ── */}
      <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, marginBottom: 40 }}>
        Étudiant en troisième année de Bachelor aux Arts et Métiers de Bordeaux, je réalise
        actuellement un stage assistant ingénieur à l&apos;Institut Français de la Vigne et du
        Vin. Passionné par l&apos;innovation industrielle, le développement de solutions
        techniques concrètes et le développement durable, je suis à la recherche d&apos;une
        alternance de 3 ans pour la formation d&apos;ingénieur de spécialité Génie Industriel
        à l&apos;ENSAM (École Nationale Supérieure des Arts et Métiers) de Paris.
      </p>

      {/* ── Formation | Expérience ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {/* ── Formation ── */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "rgba(217,119,6,0.1)",
              border: "1px solid rgba(217,119,6,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GraduationCap size={18} style={{ color: "var(--accent)" }} />
          </div>
          <h3 className="text-base font-semibold" style={{ color: "var(--anthracite)" }}>
            Formation
          </h3>
        </div>

        <div style={{ position: "relative", paddingLeft: 28 }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 5,
              top: 6,
              bottom: 6,
              width: 2,
              background: "linear-gradient(to bottom, var(--accent), rgba(255,255,255,0.06))",
              borderRadius: 2,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {formation.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ position: "absolute", left: 0 }}>
                  <TimelineDot current={item.current} />
                </div>
                <div>
                  <p style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, marginBottom: 3 }}>
                    {item.period}
                  </p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "var(--anthracite)", lineHeight: 1.35 }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Expérience professionnelle ── */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "rgba(217,119,6,0.1)",
              border: "1px solid rgba(217,119,6,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Briefcase size={18} style={{ color: "var(--accent)" }} />
          </div>
          <h3 className="text-base font-semibold" style={{ color: "var(--anthracite)" }}>
            Expérience professionnelle
          </h3>
        </div>

        <div style={{ position: "relative", paddingLeft: 28 }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 5,
              top: 6,
              bottom: 6,
              width: 2,
              background: "linear-gradient(to bottom, var(--accent), rgba(255,255,255,0.06))",
              borderRadius: 2,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ position: "absolute", left: 0 }}>
                  <TimelineDot current={exp.current} />
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${exp.current ? "rgba(217,119,6,0.35)" : "rgba(255,255,255,0.07)"}`,
                    borderRadius: 10,
                    padding: "12px 14px",
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <LogoBox logo={exp.logo} initials={exp.initials} />
                  <div>
                    <p style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, marginBottom: 3 }}>
                      {exp.period} · {exp.duration}
                    </p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "var(--anthracite)", lineHeight: 1.35 }}>
                      {exp.title}
                    </p>
                    <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{exp.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
