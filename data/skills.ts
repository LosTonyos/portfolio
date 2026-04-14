export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "CAO et conception",
    icon: "Cog",
    skills: ["CATIA V5", "SOLIDWORKS", "Fusion360", "Mise en plan", "FAO", "Matériaux composites"],
  },
  {
    title: "Fabrication et usinage",
    icon: "Wrench",
    skills: ["Usinage conventionnel & CNC", "Avant-projet de fabrication", "Soudure MIG/TIG", "Métrologie"],
  },
  {
    title: "Management de projet",
    icon: "BarChart2",
    skills: [
      "Gestion de projet (WBS/PBS, matrice de risques et de compétences...)",
      "Lean management",
      "Communication professionnelle",
      "Gestion de conflits",
    ],
  },
  {
    title: "Informatique",
    icon: "Monitor",
    skills: ["Python", "Arduino", "ArcGIS", "Excel", "Access", "APIs LLM"],
  },
  {
    title: "Culture générale",
    icon: "Globe",
    skills: [
      "Créativité (Théâtre, poésie, court-métrage)",
      "Projet Voltaire (Niveau Affaires)",
      "TOEIC",
    ],
  },
];
