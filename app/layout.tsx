import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Galaxy from "@/components/Galaxy";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Antoine Clavières – Ingénierie Industrielle",
  description:
    "Portfolio d'Antoine Clavières, étudiant ingénieur à l'ENSAM. Projets, compétences et expériences en ingénierie industrielle.",
  keywords: ["ingénierie industrielle", "ENSAM", "stage", "alternance", "CAO", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable} data-scroll-behavior="smooth">
      <body className="antialiased">
          <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
            <Galaxy
              starSpeed={0.5}
              density={0.6}
              hueShift={140}
              speed={0.3}
              glowIntensity={0.1}
              saturation={0}
              mouseRepulsion={false}
              repulsionStrength={0}
              twinkleIntensity={0.25}
              rotationSpeed={0.05}
              transparent
            />
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <Navbar />
            <main>{children}</main>
          </div>
      </body>
    </html>
  );
}
