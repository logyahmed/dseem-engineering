import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const __dirname = new URL(".", import.meta.url).pathname;

export default defineConfig({
  plugins: [react()],

  // جذر المشروع الحقيقي هو مكان index.html
  root: __dirname,

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  build: {
    // هنا Vite سيخرج المشاريع داخل dist
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },

  server: {
    fs: {
      strict: true,
    },
  },
});
