import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/BeatsUI/", 
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".wav"))
            return "assets/audio/[name][extname]";
          return "assets/[name][extname]";
        },
      },
    },
  },
  plugins: [react()],
});