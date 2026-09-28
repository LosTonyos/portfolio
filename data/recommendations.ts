export type Recommendation = {
  id: string;
  title: string;
  author: string;
  position: string;
  company: string;
  pdf: string;
};

export const recommendations: Recommendation[] = [
  {
    id: "Yacht Solutions",
    title: "Stage technicien - Yacht Solutions",
    author: "Benjamin VENDEPUTE",
    position: "Directeur de production",
    company: "Yacht Solutions",
    pdf: "/recommendations/Recommandation_Yacht_Solutions.pdf",
  },
  {
    id: "IFV",
    title: "Stage assistant-ingénieur - Institut Français de la Vigne et du Vin (IFV)",
    author: "Christian DEBORD et Marta ZAFFARONI",
    position: "Encadrants de stage",
    company: "Institut Français de la Vigne et du Vin (IFV)",
    pdf: "/recommendations/Lettre_recommandation_Antoine_Clavieres.pdf",
  },
];