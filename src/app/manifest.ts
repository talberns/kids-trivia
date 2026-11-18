import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Through Their Eyes — Bible History Trivia",
    short_name: "Through Their Eyes",
    description: "Learn the world of the Bible, one question at a time.",
    start_url: "/",
    display: "standalone",
    background_color: "#07060f",
    theme_color: "#07060f",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
