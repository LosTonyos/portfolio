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
];