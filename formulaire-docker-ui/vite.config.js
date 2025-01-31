import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

console.log("VITE_API_URL:", process.env.VITE_API_URL);

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/users": {
        target: process.env.VITE_API_URL || "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
