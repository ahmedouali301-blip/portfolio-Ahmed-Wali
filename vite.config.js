import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy under a sub-path (e.g. GitHub Pages: /portfolio/), set `base: "/portfolio/"`.
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          motion: ["framer-motion"],
        },
      },
    },
  },
});
