import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(async ({ mode }) => {
  const componentTagger = mode === 'development' 
    ? (await import('lovable-tagger')).componentTagger 
    : null;

  return {
    base: "/",
    server: {
      host: "::",
      port: 8080,
      allowedHosts: ["5dcfdd93-c35e-4287-92d9-252f8002148f.lovableproject.com"],
      fs: {
        strict: false
      }
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        external: ["lovable-tagger"]
      }
    }
  };
});
