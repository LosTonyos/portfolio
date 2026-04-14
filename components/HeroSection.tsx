"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

const Beams = dynamic(() => import("@/components/Beams"), { ssr: false });

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [step, setStep] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 120);
    const t2 = setTimeout(() => setStep(2), 420);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section
      id="hero"
      style={{ position: "relative", minHeight: "100vh", background: "#000", overflow: "hidden" }}
      className="flex items-center"
    >
      {/* Beams WebGL background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Beams
          beamWidth={1.5}
          beamHeight={16}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2.2}
          noiseIntensity={2}
          scale={0.2}
          rotation={0}
        />
      </div>

      {/* Content on top of Beams */}
      <div className="container-custom relative z-10 pt-16">
          <h1
            style={{
              fontSize: "clamp(3rem, 13vw, 13rem)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "#fff",
            }}
            className="mb-6"
          >
            <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em" }}>
              <span style={{
                display: "block",
                transform: step >= 1 ? "translateY(0)" : "translateY(105%)",
                opacity: step >= 1 ? 1 : 0,
                transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease",
              }}>
                Antoine
              </span>
            </span>
            <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em" }}>
              <span style={{
                display: "block",
                color: "var(--accent)",
                transform: step >= 2 ? "translateY(0)" : "translateY(105%)",
                opacity: step >= 2 ? 1 : 0,
                transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease",
              }}>
                Clavières
              </span>
            </span>
          </h1>

        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              Voir mes projets <ArrowRight size={15} />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all"
              style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff" }}
            >
              Me contacter
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.2)" }} />
      </div>
    </section>
  );
}
