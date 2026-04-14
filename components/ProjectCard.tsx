import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className="card block group">
      {/* Image placeholder */}
      <div
        className="h-44 flex items-center justify-center text-sm font-medium"
        style={{ background: "linear-gradient(135deg, #f5f5f4 0%, #e7e5e4 100%)", color: "var(--muted)" }}
      >
        {project.images.length > 0 ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span>Image à venir</span>
        )}
      </div>

      <div className="p-5">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className="flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ background: "rgba(217,119,6,0.1)", color: "var(--accent-dark)" }}
          >
            <Tag size={10} />
            {project.category}
          </span>
          <span
            className="flex items-center gap-1 text-xs"
            style={{ color: "var(--muted)" }}
          >
            <Calendar size={10} />
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-bold text-base mb-2 group-hover:text-[var(--accent)] transition-colors"
          style={{ color: "var(--anthracite)" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
          {project.shortDescription}
        </p>

        {/* Skills tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="text-xs px-2 py-0.5 rounded"
              style={{ background: "#f5f5f4", color: "var(--muted)", border: "1px solid var(--border)" }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA */}
        <span
          className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
          style={{ color: "var(--accent)" }}
        >
          Voir le projet <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
