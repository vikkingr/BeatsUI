import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".wav"))
            return "assets/audio/[name][extname]";
          else
            return "assets/[name].[hash][extname]";
        },
      },
    },
  },
  plugins: [react()],
});
