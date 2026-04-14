export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  context: string;
  missions: string[];
  moyens?: string;
  details?: string;
  realisations: string[];
  skills: string[];
  bilan: string;
  images: string[];
  imageCaptions?: string[];
  coverImage?: string;
  coverFit?: "cover" | "contain";
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "rarv-industrialisation",
    title: "Industrialisation Réalité Augmenté",
    category: "Projets académiques",
    year: "2026 · 1 semaine",
    shortDescription:
      "Semaine thématique RARV à l'ENSAM : utilisation de la réalité augmentée pour guider un opérateur dans le montage d'une trottinette électrique.",
    context:
      "Semaine thématique sur la RARV (Réalité Augmentée / Réalité Virtuelle) et la RM (Réalité Mixte). L'objectif était de découvrir la RARV dans l'industrie via différents groupes de travail (Méthodes, design, ergonomie...). Notre binôme étions le groupe industrialisation. Nous travaillons sur le montage d'une partie d'une trottinette électrique.",
    missions: [
      "Former et guider un opérateur dans ses tâches de fabrication et de contrôle du produit, en utilisant des outils XR de support opérationnel.",
    ],
    realisations: [
      "Scan 3D de la trottinette via Reality Scan",
      "Superposition de notre rendu 3D sur la trottinette (Delmia Augmented Experience)",
      "Mise en place d'un mode opératoire d'assemblage",
      "Formation machine en réalité augmentée (hololens)",
      "Rendu oral quotidien de l'avancement",
    ],
    skills: [
      "Réalité augmentée",
      "Hololens 2",
      "Mode opératoire",
      "Delmia Augmented Experience",
      "XR industrielle",
    ],
    bilan:
      "Ce projet m'a permis de découvrir l'utilisation de la RARV dans l'industrie et les utilisations qu'elle peut avoir ou qu'elle pourra avoir à l'avenir. Il ne s'agit pas nécessairement d'un outil superflux et peut être un vrai atout selon les cas d'usage. Cette semaine m'a aussi permis d'approfondir des connaissances en industrialisation, domaine vers lequel je m'oriente.",
    images: [
      "/images/RARV/reality_scan.png",
      "/images/RARV/vid_trott.mp4",
      "/images/RARV/vid_trott2.mp4",
      "/images/RARV/montage.mp4",
      "/images/RARV/hololens_vid.mp4",
    ],
    imageCaptions: [
      "Scan 3D de la trottinette",
      "",
      "",
      "",
      "",
    ],
    coverImage: "/images/RARV/cover.jpg",
    featured: false,
  },
  {
    slug: "hackaton-ia",
    title: "Hackaton IA",
    category: "Projets professionels",
    year: "2025 · 1 semaine",
    shortDescription:
      "Hackathon inter-écoles organisé par l'ENSAM en partenariat avec STMicroelectronics, avec création d'un système de contrôle gestuel pour TV.",
    context:
      "Hackathon inter-écoles organisé par l'ENSAM en partenariat avec STMicroelectronics. Chaque équipe recevait un capteur Time-of-Flight STM (résolution 32×32) et devait concevoir une application innovante exploitant l'IA et les données du capteur.",
    missions: [
      "Créer un système de contrôle gestuel permettant de changer de chaîne de télévision par de simples mouvements de la main (gauche/droite) détectés par le capteur Time-of-Flight, sans télécommande ni commande vocale."
    ],
    details:
      "Capteur Time-of-Flight STMicroelectronics (résolution 32×32). Traitement du signal pour détecter les mouvements de la main en temps réel. Classification des gestes (swipe gauche, swipe droite) pour déclencher les actions correspondantes. Intégration logicielle pour le contrôle TV.",
    realisations: [],
    skills: ["IA", "Traitement du signal", "Python", "Pitch"],
    bilan:
      "Système fonctionnel de changement de chaîne par geste de la main. Victoire au concours STMicroelectronics. Présentation du concept devant un jury et un amphithéâtre de 100 à 500 personnes.",
    images: [
      "/images/Hackaton/cover.png",
      "/images/Hackaton/microcontroleur.jpg",
      "/images/Hackaton/signe_main.mp4",
      "/images/Hackaton/doigt.jpg",
      "/images/Hackaton/presentation.mp4",
      "/images/Hackaton/conference.jpg"
    ],
    coverImage: "/images/Hackaton/cover.png",
    coverFit: "contain",
    featured: false
  },
  {
    slug: "stage-yacht-solutions",
    title: "Stage technicien – Yacht Solutions",
    category: "Projets professionels",
    year: "2025 · 3 mois",
    shortDescription:
      "Stage en bureau d'études au sein d'une entreprise spécialisée dans la maintenance et la rénovation de yachts de luxe.",
    context:
      "Du 21 avril au 11 juillet 2025, j'ai réalisé dans le cadre de ma formation un stage technicien au sein de Yacht Solutions. C'est une entreprise spécialisée dans la customisation de catamarans de croisière de la marque Lagoon, produit par CNB.",
    missions: [
      "Au sein de l'équipe technique, ma mission était de participer aux installations et aux études de demandes reçues par les clients.",
    ],
    realisations: [
      "Installation d'antennes Starlink",
      "Optimisation et aménagement d'une pointe avant (menuiserie)",
      "Schéma électrique d'installation d'un cinéma plein air et mise en place de celui-ci",
      "Préparation et mise en place d'un dessalinisateur",
      "Câblages",
      "Pose d'accastillage",
    ],
    skills: [
      "Travail en équipe",
      "Coopération entre le bureau d'études et les techniciens",
      "S'adapter aux imprévus et aux contraintes de production",
      "Lecture, réalisation et exécution de plans techniques",
      "Compréhension du fonctionnement d'équipements nautiques",
      "Électricité, plomberie, menuiserie, accastillage",
    ],
    bilan:
      "Ce stage a pour moi été une expérience positive, il m'a apporté énormément de connaissances et de pratique dans le monde du nautisme. La diversité des tâches offrait une dynamique de travail très varié où chaque journée était différente. Avec moins de 20 employés, j'ai pu appréhender le travail dans une très petite entreprise.",
    coverImage: "/images/Yacht Solutions/Couverture.png",
    images: [
      "/images/Yacht Solutions/lagoon_65.jpg",
      "/images/Yacht Solutions/Yacht_solutions.jpg",
      "/images/Yacht Solutions/dessal.jpeg",
      "/images/Yacht Solutions/branchement_cinema.jpg",
      "/images/Yacht Solutions/pointe_avant.jpg",
      "/images/Yacht Solutions/starlink.jpeg",
    ],
    imageCaptions: [
      "Lagoon 65",
      "",
      "Dessalinisateur installé",
      "Schéma d'installation home cinéma",
      "Préparation pointe avant",
      "Antenne Starlink",
    ],
    featured: true,
  },
  {
    slug: "stage-cnb",
    title: "Stage exécutant ouvrier – CNB",
    category: "Projets professionels",
    year: "2024 · 1 mois",
    shortDescription:
      "Stage exécutant ouvrier à Construction Navale Bordeaux, spécialisé dans la construction de catamarans de croisière Lagoon.",
    context:
      "Du 29 janvier au 23 février 2024, j'ai réalisé un stage exécutant ouvrier à Construction Navale Bordeaux (CNB). C'est une entreprise spécialisée dans la construction de catamarans de croisière, appartenant au groupe Bénéteau.",
    missions: [
      "Mise en place des premières installations en début de chaîne de production sur des Lagoon 55, avec menuisiers, électriciens et méca-plombiers.",
    ],
    realisations: [
      "Installation assèchement (permet d'évacuer l'eau de la coque en cas de besoin)",
      "Mise à niveau laser du bateau",
      "Installation supports réservoirs et réservoirs",
      "Pose des varangues : la charpente du bateau (majeure partie du travail des menuisiers)",
      "Rallonges",
      "Cheminement câbles et tuyaux",
    ],
    skills: ["Menuiserie", "Plomberie", "Électricité", "Respect des plannings", "Travail en chaîne"],
    bilan:
      "Ce stage m'a dans un premier temps appris beaucoup sur l'industrie nautique, mais il m'a surtout permis de découvrir les conditions de travail des ouvriers au quotidien. C'est selon moi essentiel pour toute poursuite dans le domaine industriel.",
    coverImage: "/images/CNB/Lagoon_55_couverture.png",
    images: [
      "/images/CNB/Lagoon_55.png",
      "/images/CNB/chantier.jpeg",
      "/images/CNB/coque_depuis_pont.jpeg",
      "/images/CNB/reservoir.jpeg",
      "/images/CNB/vu_dans_coque.jpeg",
    ],
    featured: true,
  },
  {
    slug: "caisse-a-savon",
    title: "Caisse à savon",
    category: "Projets académiques",
    year: "2025",
    shortDescription:
      "Conception et fabrication d'une caisse à savon avec un groupe de 4 personnes, de la CAO jusqu'à la réalisation physique.",
    context:
      "Durant ma 2ème année de Bachelor, avec un groupe de 3 autres personnes, nous avons réalisé une caisse à savon. C'est un véhicule roulant artisanal dépourvu de moteur. Notre objectif était de participer en juin 2025 à une course de caisse à savon, où il faut descendre une pente de 1km le plus rapidement.",
    missions: [
      "Concevoir et fabriquer une caisse à savon capable de participer à une course de descente d'1 km.",
    ],
    realisations: [
      "Choix des solutions",
      "Conception 3D de la caisse à savon",
      "Achats des matériaux",
      "Soudure du châssis",
      "Choix et réalisation du système de direction",
    ],
    skills: [
      "Gérer un budget",
      "Gérer des problèmes d'équipe",
      "Travail d'équipe",
      "CAO",
      "Soudure",
      "Découpe jet d'eau",
    ],
    bilan:
      "C'est un projet qui avait mal débuté en raison d'une mauvaise répartition des tâches et un manque d'implication au sein de l'équipe. Nous avons mis en place des outils de gestion de projet afin de pallier cela, ce qui s'est avéré efficace. Ce projet m'a apporté autant en compétences techniques qu'en travail en équipe et gestion de conflits. Nous n'avons malheureusement pas eu le temps de le terminer.",
    coverImage: "/images/Caisse à savon/cas.png",
    images: [
      "/images/Caisse à savon/cas.png",
      "/images/Caisse à savon/cao_cas.png",
      "/images/Caisse à savon/train_avant.mp4",
      "/images/Caisse à savon/jet_deau.png",
    ],
    imageCaptions: [
      "",
      "CAO de la caisse à savon",
      "Train avant - Système de direction",
      "",
    ],
    featured: true,
  },
  {
    slug: "pergola",
    title: "Volontariat international – Grèce",
    category: "Autres",
    year: "2024 · 1 mois",
    shortDescription:
      "Séjour de volontariat en Grèce : construction d'une pergola pour l'hôtel Kalloni Bay à Lesbos, avec un objectif linguistique, culturel et technique.",
    context:
      "Afin de remplir un objectif de ma formation, j'ai planifié, organisé et supervisé un séjour à l'étranger de type volontariat qui avait à la fois un but linguistique, culturel et technique.\nNos objectifs étaient de ne pas dépasser un budget maximum de 500 euros par personne, s'intégrer dans la structure qui nous accueillait et avoir un aperçu culturel du pays.",
    missions: [
      "Construire une pergola démontable avec un lit intégré pour les clients de l'hôtel Kalloni Bay à Lesbos, une île Grecque à l'ouest de la Turquie.",
    ],
    moyens:
      "Nous étions 3 à travailler sur ce projet et avions les financements de l'hôtel. L'achat des matériaux se faisait avec le jardinier qui ne parlait pas très bien anglais. Malgré des problèmes de communication, nos objectifs ont été atteints en respectant le budget donné par l'hôtel.\nEn parallèle, nous aidions également le personnel de l'hôtel sur le service et l'entretien du jardin.",
    realisations: [
      "Service du matin",
      "Jardinage",
      "Plans de la pergola et liste du matériel",
      "Découpe des bois aux bonnes mesures",
      "Montage de la structure",
      "Installation des planches et de la toile faisant office de toit",
      "Fabrication du lit",
    ],
    skills: [
      "Gain d'autonomie",
      "Organisation de projet",
      "Communication au sein d'une équipe et prise de décisions",
      "Gestion de budget",
      "Échanger en anglais",
      "Travail du bois",
    ],
    bilan:
      "Le projet a été réalisé dans les temps avec un budget ainsi qu'un cahier des charges respectés. Ce, malgré des difficultés dues au fait que l'hôtel était actif (pas de bruit le matin, service). C'est également un apport culturel indéniable, d'avoir visité les différents recoins du pays et parlé avec des personnes d'horizons différents.",
    coverImage: "/images/Pergola/pergola.jpeg",
    images: [
      "/images/Pergola/pergola.jpeg",
      "/images/Pergola/montage_pergola.jpeg",
      "/images/Pergola/sachaantoine.jpg",
      "/images/Pergola/paysage.jpeg",
      "/images/Pergola/jardinage.jpeg",
      "/images/Pergola/port.jpeg",
    ],
    featured: false,
  },
  {
    slug: "projet-meri",
    title: "Projet MERI",
    category: "Projets académiques",
    year: "2023",
    shortDescription:
      "Projet académique pluridisciplinaire mené à l'ENSAM, combinant ingénierie mécanique et gestion de projet.",
    context:
      "Le projet MERI, pour Maquette Evolutive Représentative de l'Industrie, est un projet proposé par ma formation qui consiste en la réalisation d'une usine de fabrication de bougies. Elle est divisée en WP (Work Package) où chaque groupe d'étudiants travaille sur une partie du projet. Mon binôme et moi avons travaillé sur le WP Contrôle Masse.",
    missions: [
      "Vérifier que le poids de la bougie est conforme. S'il l'est, alors elle continue dans la chaîne de production vers un convoyeur. S'il ne l'est pas, alors la bougie est placée sur un convoyeur qui l'envoie au recyclage.",
    ],
    realisations: [
      "Fabrication de la balance : usinage de la plaque inférieure en métal et de la plaque supérieure en polycarbonate",
      "Codage de la balance Hx711 et de l'affichage sur l'écran LCD",
      "Codage et prise de position du Braccio++",
      "Conception de la balance et d'un support pour les câbles",
      "Collaboration avec les WP adjacents : ceux qui nous apportent la bougie sur un convoyeur et ceux à qui l'on envoie la bougie après l'avoir pesée",
    ],
    skills: [
      "Codage Arduino",
      "Réaliser des comptes rendus",
      "Programmation d'un Braccio++",
      "Robotique",
      "Communication",
    ],
    bilan:
      "Le projet MERI m'a permis de découvrir la réalité du travail en équipe sur un projet technique long. La coordination, la communication et la rigueur de la documentation sont des compétences que j'ai considérablement développées.",
    coverImage: "/images/Projet MERI/braccio.png",
    images: [
      "/images/Projet MERI/ensemble_plateforme.jpeg",
      "/images/Projet MERI/braccio.png",
      "/images/Projet MERI/cao_balance.png",
      "/images/Projet MERI/Plateforme_MERI_WP4000.mp4",
    ],
    imageCaptions: [
      "Plateforme MERI",
      "Braccio++",
      "CAO balance",
      "",
    ],
    featured: false,
  },
  {
    slug: "composite-palme",
    title: "Composite — Réalisation d'une palme",
    category: "Projets académiques",
    year: "2026 · 1 semaine",
    shortDescription:
      "Semaine thématique Composite à l'ENSAM : réalisation d'une palme de nage en fibre de verre, avec caractérisation mécanique et analyse par capture de points en Python.",
    context:
      "Semaine thématique Composite dans le cadre du cursus ENSAM. L'objectif était de réaliser une palme de nage comme exemple et prétexte pour travailler sur les bases du composite (fibre de verre).",
    missions: [
      "Réaliser des éprouvettes en composite fibre de verre, les caractériser mécaniquement, puis reproduire une palme du commerce en composite en déterminant le nombre de couches et le ratio matrice/fibres nécessaires.",
    ],
    details:
      "Fabrication d'éprouvettes en composite fibre de verre. Instrumentation et essais de traction pour extraire les valeurs mécaniques : module de Young, résistance à la traction, allongement. Caractérisation de la palme d'origine par un système d'analyse de capture de points développé en Python sur VSCode, permettant de mesurer la flexion en plusieurs points de la palme. Combinaison des données de traction et de flexion pour estimer le nombre de couches composites et le pourcentage matrice/fibres nécessaire pour reproduire la palme du commerce.",
    realisations: [],
    skills: [
      "Composite",
      "Essais mécaniques",
      "Caractérisation matériaux",
      "Analyse de données",
    ],
    bilan:
      "Palme en composite fibre de verre réalisée avec succès. Éprouvettes caractérisées mécaniquement. Système Python de capture de points fonctionnel pour mesurer la flexion. Compréhension concrète du fonctionnement des composites.",
    coverImage: "/images/Composite/palme_flexion.jpeg",
    images: [
      "/images/Composite/palme_flexion.jpeg",
      "/images/Composite/calcul_fleche.jpeg",
      "/images/Composite/eprouvette.jpg",
      "/images/Composite/eprouvette2.jpg",
      "/images/Composite/resultats_eprouvette.jpg",
      "/images/Composite/resine.jpg",
      "/images/Composite/miseavide.jpg",
      "/images/Composite/palme_termine.jpeg",
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
