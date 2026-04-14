"use client";

import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false });

export default function AuroraBackground() {
  return (
    <Aurora
      colorStops={["#0d0500", "#c47d0a", "#0d0500"]}
      amplitude={1.2}
      blend={0.6}
      speed={0.8}
    />
  );
}
