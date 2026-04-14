import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, CheckCircle } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Projet introuvable" };
  return {
    title: `${project.title} – Antoine Clavières`,
    description: project.shortDescription,
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      {/* Header */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(160deg, #fafaf9 60%, #fef3c7 100%)" }}
      >
        <div className="container-custom">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors"
            style={{ color: "var(--muted)" }}
          >
            <ArrowLeft size={14} /> Tous les projets
          </Link>

          <div className="flex flex-wrap gap-3 mb-4">
            <span
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: "rgba(217,119,6,0.12)", color: "var(--accent-dark)" }}
            >
              <Tag size={11} />
              {project.category}
            </span>
            <span
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "var(--card)", color: "var(--muted)", border: "1px solid var(--border)" }}
            >
              <Calendar size={11} />
              {project.year}
            </span>
          </div>

          <h1 className="heading-lg mb-4" style={{ color: "var(--anthracite)" }}>
            {project.title}
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
            {project.shortDescription}
          </p>
        </div>
      </section>

      {/* Image placeholder */}
      {project.images.length === 0 && (
        <div
          className="h-64 flex items-center justify-center text-sm"
          style={{ background: "#f0efed", color: "var(--muted)", borderBottom: "1px solid var(--border)" }}
        >
          Images du projet à venir
        </div>
      )}

      {/* Contenu principal */}
      <section className="section-padding" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-10">
              {/* Contexte */}
              <div>
                <h2
                  className="heading-md mb-3 pb-2"
                  style={{ color: "var(--anthracite)", borderBottom: "2px solid var(--accent)" }}
                >
                  Contexte
                </h2>
                <p className="text-sm leading-loose" style={{ color: "var(--muted)" }}>
                  {project.context}
                </p>
              </div>

              {/* Missions */}
              <div>
                <h2
                  className="heading-md mb-3 pb-2"
                  style={{ color: "var(--anthracite)", borderBottom: "2px solid var(--accent)" }}
                >
                  Missions
                </h2>
                <ul className="space-y-3">
                  {project.missions.map((m, i) => (
                    <li key={i} className="flex gap-3 text-sm" style={{ color: "var(--muted)" }}>
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ background: "rgba(217,119,6,0.1)", color: "var(--accent-dark)" }}
                      >
                        {i + 1}
                      </span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Réalisations */}
              <div>
                <h2
                  className="heading-md mb-3 pb-2"
                  style={{ color: "var(--anthracite)", borderBottom: "2px solid var(--accent)" }}
                >
                  Réalisations
                </h2>
                <ul className="space-y-2">
                  {project.realisations.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--muted)" }}>
                      <CheckCircle size={15} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bilan */}
              <div
                className="p-6 rounded-xl border-l-4"
                style={{
                  background: "rgba(217,119,6,0.05)",
                  borderColor: "var(--accent)",
                  border: "1px solid rgba(217,119,6,0.2)",
                  borderLeftWidth: "4px",
                  borderLeftColor: "var(--accent)",
                }}
              >
                <h2 className="heading-md mb-3" style={{ color: "var(--anthracite)" }}>
                  Bilan personnel
                </h2>
                <p className="text-sm leading-loose" style={{ color: "var(--muted)" }}>
                  {project.bilan}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Compétences développées */}
              <div
                className="p-5 rounded-xl border"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                <h3 className="heading-md mb-4" style={{ color: "var(--anthracite)" }}>
                  Compétences développées
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: "var(--anthracite)", color: "#fff" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation projets */}
              <div
                className="p-5 rounded-xl border"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                <h3 className="heading-md mb-4" style={{ color: "var(--anthracite)" }}>
                  Autres projets
                </h3>
                <ul className="space-y-2">
                  {projects
                    .filter((p) => p.slug !== project.slug)
                    .slice(0, 4)
                    .map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/projects/${p.slug}`}
                          className="text-sm transition-colors block py-1"
                          style={{ color: "var(--muted)" }}
                        >
                          → {p.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation bas de page */}
      <section
        className="py-8"
        style={{ borderTop: "1px solid var(--border)", background: "#f5f5f4" }}
      >
        <div className="container-custom flex flex-wrap gap-3 justify-between items-center">
          <Link href="/projects" className="btn-outline text-sm">
            <ArrowLeft size={14} /> Tous les projets
          </Link>
          <Link href="/contact" className="btn-primary text-sm">
            Me contacter
          </Link>
        </div>
      </section>
    </>
  );
}
