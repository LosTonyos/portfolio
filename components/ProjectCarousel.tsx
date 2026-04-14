"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";

const CARD_W = 220;
const CARD_H = 290;
const TRANSLATE_Z = 500;
const AUTO_SPEED = 360 / 24000; // deg/ms → full turn in 24s


function ModalGallery({ images, captions }: { images: string[]; captions?: string[] }) {
  const [active, setActive] = useState(0);
  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);
  const caption = captions?.[active];

  return (
    <div style={{ marginBottom: "4px" }}>
      {/* Main image / video */}
      <div style={{ position: "relative", borderRadius: "10px", overflow: "hidden", background: "#111", display: "flex", justifyContent: "center", maxHeight: "480px" }}>
        {images[active].endsWith(".mp4") ? (
          <video
            key={images[active]}
            src={images[active]}
            controls
            muted
            autoPlay
            controlsList="novolume"
            onVolumeChange={(e) => { const v = e.currentTarget; if (!v.muted) v.muted = true; }}
            style={{ maxWidth: "100%", maxHeight: "480px", display: "block" }}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={images[active]}
            alt={caption || `Photo ${active + 1}`}
            style={{ maxWidth: "100%", maxHeight: "480px", objectFit: "contain", display: "block" }}
          />
        )}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              style={{
                position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.55)", border: "none", borderRadius: "50%",
                width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "#fff",
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              style={{
                position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.55)", border: "none", borderRadius: "50%",
                width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "#fff",
              }}
            >
              <ChevronRight size={18} />
            </button>
            <div style={{ position: "absolute", bottom: 10, right: 12, background: "rgba(0,0,0,0.5)", color: "#fff", fontSize: 11, padding: "2px 8px", borderRadius: 12 }}>
              {active + 1} / {images.length}
            </div>
          </>
        )}
      </div>
      {/* Caption */}
      {caption && (
        <p style={{ textAlign: "center", fontSize: "12px", fontStyle: "italic", color: "var(--muted)", marginTop: "6px", marginBottom: "2px" }}>
          {caption}
        </p>
      )}
      {/* Thumbnails */}
      {images.length > 1 && (
        <div style={{ display: "flex", gap: 8, marginTop: 8, overflowX: "auto", paddingBottom: 2 }}>
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                flexShrink: 0, width: 72, height: 52, borderRadius: 6, overflow: "hidden",
                border: i === active ? "2px solid var(--accent)" : "2px solid transparent",
                padding: 0, cursor: "pointer", background: "#111",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              {src.endsWith(".mp4") ? (
                <span style={{ fontSize: 22 }}>▶</span>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt={`Thumb ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectCarousel() {
  const [selected, setSelected]       = useState<Project | null>(null);
  const [isDragging, setIsDragging]   = useState(false);
  const [expandOrigin, setExpandOrigin] = useState("50% 50%");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const filteredProjects = activeCategory ? projects.filter((p) => p.category === activeCategory) : projects;
  const N = filteredProjects.length;

  const angleRef      = useRef(0);
  const velocityRef   = useRef(AUTO_SPEED);
  const isDraggingRef = useRef(false);
  const isHoveringRef = useRef(false);
  const isFrozenRef   = useRef(false);
  const lastXRef      = useRef(0);
  const dragStartXRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const lastTimeRef   = useRef<number | null>(null);
  const innerRef      = useRef<HTMLDivElement>(null);
  // ── RAF rotation loop ─────────────────────────────────
  useEffect(() => {
    let raf: number;
    const animate = (ts: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = ts;
      const dt = Math.min(ts - lastTimeRef.current, 50);
      lastTimeRef.current = ts;

      if (!isDraggingRef.current) {
        const target = (isHoveringRef.current || isFrozenRef.current) ? 0 : AUTO_SPEED;
        velocityRef.current += (target - velocityRef.current) * 0.028;
        angleRef.current += velocityRef.current * dt;
      }

      if (innerRef.current) {
        innerRef.current.style.transform =
          `perspective(1200px) rotateX(-10deg) rotateY(${angleRef.current}deg)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // ── Drag handlers ─────────────────────────────────────
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    lastXRef.current = e.clientX;
    dragStartXRef.current = e.clientX;
    setIsDragging(true);
  };

  const handleGlobalMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    if (Math.abs(e.clientX - dragStartXRef.current) > 5) hasDraggedRef.current = true;
    angleRef.current += dx * 0.18; // ← reduced sensitivity
    velocityRef.current = (dx * 0.18) / 16.67;
    lastXRef.current = e.clientX;
  }, []);

  const handleGlobalMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    setIsDragging(false);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [handleGlobalMouseMove, handleGlobalMouseUp]);

  // ── Expand-from-card modal ─────────────────────────────
  const handleCardClick = (project: Project, e: React.MouseEvent<HTMLDivElement>) => {
    if (hasDraggedRef.current) return;

    // Compute transform-origin so the modal appears to expand from the card
    const rect = e.currentTarget.getBoundingClientRect();
    const cardCX = rect.left + rect.width  / 2;
    const cardCY = rect.top  + rect.height / 2;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const modalW = Math.min(620, vw - 40);
    const modalLeft = (vw - modalW) / 2;
    const modalTop  = vh * 0.075; // modal sits ~7.5% from top (max-height 85vh)
    const ox = Math.max(0, Math.min(cardCX - modalLeft, modalW));
    const oy = Math.max(0, cardCY - modalTop);
    setExpandOrigin(`${ox}px ${oy}px`);

    isFrozenRef.current = true;
    setSelected(project);
  };

  const closeCard = () => {
    isFrozenRef.current = false;
    setSelected(null);
  };

  return (
    <div>
      {/* ── Category filter buttons ── */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
        <button
          onClick={() => { setActiveCategory(null); angleRef.current = 0; }}
          style={{
            padding: "6px 16px",
            borderRadius: 9999,
            fontSize: 13,
            fontWeight: 600,
            border: activeCategory === null ? "1px solid var(--accent)" : "1px solid rgba(255,255,255,0.12)",
            background: activeCategory === null ? "rgba(217,119,6,0.15)" : "rgba(255,255,255,0.04)",
            color: activeCategory === null ? "var(--accent)" : "var(--muted)",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          Tout
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); angleRef.current = 0; }}
            style={{
              padding: "6px 16px",
              borderRadius: 9999,
              fontSize: 13,
              fontWeight: 600,
              border: activeCategory === cat ? "1px solid var(--accent)" : "1px solid rgba(255,255,255,0.12)",
              background: activeCategory === cat ? "rgba(217,119,6,0.15)" : "rgba(255,255,255,0.04)",
              color: activeCategory === cat ? "var(--accent)" : "var(--muted)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
      onMouseEnter={() => { isHoveringRef.current = true; }}
      onMouseLeave={() => {
        isHoveringRef.current = false;
        if (!selected) { isDraggingRef.current = false; setIsDragging(false); }
      }}
      onMouseDown={handleMouseDown}
      style={{ position: "relative", userSelect: "none", cursor: isDragging ? "grabbing" : "grab" }}
    >
      <div className="carousel-wrapper">
        <div
          ref={innerRef}
          style={{
            position: "absolute",
            width: `${CARD_W}px`,
            height: `${CARD_H}px`,
            top: "50%",
            left: "50%",
            transformStyle: "preserve-3d",
            translate: "-50% -50%",
          }}
        >
          {filteredProjects.map((project, i) => (
            <div
              key={project.slug}
              style={{
                position: "absolute",
                inset: 0,
                transform: `rotateY(${(360 / (N || 1)) * i}deg) translateZ(${TRANSLATE_Z}px)`,
              }}
            >
              {/* Float layer */}
              <div
                className="carousel-card"
                style={{
                  width: "100%",
                  height: "100%",
                  animation: `float-card ${2.6 + i * 0.25}s ease-in-out ${i * 0.5}s infinite`,
                  cursor: isDragging ? "grabbing" : "pointer",
                  position: "relative",
                }}
                onClick={(e) => handleCardClick(project, e)}
              >
                <div className="carousel-card-img">
                  {(project.coverImage ?? project.images[0]) ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={project.coverImage ?? project.images[0]} alt={project.title} draggable="false" style={{ width: "100%", height: "100%", objectFit: project.coverFit ?? "cover", objectPosition: project.coverFit === "contain" ? "center center" : "center 20%", background: project.coverFit === "contain" ? "#fff" : undefined }} />
                  ) : (
                    <div className="carousel-card-placeholder" />
                  )}
                </div>
                <div className="carousel-card-footer">
                  <p className="carousel-card-title">{project.title}</p>
                  <p className="carousel-card-meta">{project.category ? `${project.category} · ${project.year}` : project.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: "140px", fontSize: "12px", color: "var(--muted)" }}>
        Glissez pour tourner · Cliquez pour les détails
      </p>

      {/* Modal — expands from card position */}
      {selected && (
        <div className="carousel-modal-overlay" onClick={closeCard}>
          <div
            className="carousel-modal"
            style={{ transformOrigin: expandOrigin }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="carousel-modal-close" onClick={closeCard} aria-label="Fermer">
              <X size={18} />
            </button>

            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
              {selected.category && <span className="carousel-modal-tag">{selected.category}</span>}
              <span style={{ fontSize: "12px", color: "var(--muted)" }}>{selected.year}</span>
            </div>
            <h3 className="carousel-modal-title">{selected.title}</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {/* Contexte */}
              <div className="carousel-modal-section">
                <p className="carousel-modal-section-label">Contexte</p>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7 }}>{selected.context}</p>
              </div>

              {/* Gallery */}
              {selected.images.length > 0 && <ModalGallery images={selected.images} captions={selected.imageCaptions} />}

              {/* Missions */}
              <div className="carousel-modal-section">
                <p className="carousel-modal-section-label">Missions</p>
                <ul className="carousel-modal-list">
                  {selected.missions.map((m, i) => (
                    <li key={i}><span className="carousel-modal-bullet">›</span>{m}</li>
                  ))}
                </ul>
              </div>

              {/* Détails techniques */}
              {selected.details && (
                <div className="carousel-modal-section">
                  <p className="carousel-modal-section-label">Détails techniques</p>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7 }}>{selected.details}</p>
                </div>
              )}

              {/* Moyens */}
              {selected.moyens && (
                <div className="carousel-modal-section">
                  <p className="carousel-modal-section-label">Moyens</p>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7, whiteSpace: "pre-line" }}>{selected.moyens}</p>
                </div>
              )}

              {/* Réalisations */}
              {selected.realisations.length > 0 && (
                <div className="carousel-modal-section">
                  <p className="carousel-modal-section-label">Réalisations</p>
                  <ul className="carousel-modal-list">
                    {selected.realisations.map((r, i) => (
                      <li key={i}><span className="carousel-modal-bullet">›</span>{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Bilan */}
              <div style={{
                padding: "16px 20px",
                borderRadius: "10px",
                background: "rgba(217,119,6,0.06)",
                border: "1px solid rgba(217,119,6,0.2)",
                borderLeft: "4px solid var(--accent)",
              }}>
                <p className="carousel-modal-section-label" style={{ marginBottom: "8px" }}>Bilan personnel</p>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7 }}>{selected.bilan}</p>
              </div>

              {/* Compétences */}
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "12px",
                padding: "16px 20px",
              }}>
                <p className="carousel-modal-section-label" style={{ marginBottom: "12px" }}>Compétences développées</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {selected.skills.map((s) => (
                    <span key={s} className="carousel-modal-skill">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
