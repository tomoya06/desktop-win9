import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/desktop-win9/",
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
