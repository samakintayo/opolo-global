import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",    // relative to frontend
    emptyOutDir: true  // clears old builds
  },
  base: "./"           // makes JS/CSS relative
});
