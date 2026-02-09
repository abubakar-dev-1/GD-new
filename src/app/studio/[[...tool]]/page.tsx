"use client";

import dynamic from "next/dynamic";
import config from "../../../../sanity/config";

const NextStudio = dynamic(() => import("next-sanity/studio").then((mod) => mod.NextStudio), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <p className="text-lg text-gray-500">Loading Studio...</p>
    </div>
  ),
});

export default function StudioPage() {
  return <NextStudio config={config} />;
}
