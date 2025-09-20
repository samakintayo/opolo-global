import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",   // relative path to frontend folder ✅
    emptyOutDir: true // ensures old files are cleared
  },
  base: "./"
});
