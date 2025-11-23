import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// حل بديل لـ __dirname في ESM
const __dirname = new URL(".", import.meta.url).pathname;

export default defineConfig({
  plugins: [
    react(),
    // حزفنا إضافات Replit لأنها للتجارب فقط وتعمل مشاكل في Vercel
  ],

  // مجلد المشروع الأساسي لـ Vite هو client (فيه index.html)
  root: path.resolve(__dirname, "client"),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  // نخلي الملفات الجاهزة في dist/public عشان Vercel يقدر يقرأها
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },

  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
