import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import type { Plugin } from 'vite';

export default defineConfig(async ({ mode, command }) => {
  // Only import lovable-tagger in development mode and when not building
  let componentTagger: (() => Plugin) | null = null;
  if (mode === 'development' && command !== 'build') {
    try {
      const tagger = await import('lovable-tagger');
      componentTagger = tagger.componentTagger;
    } catch (error) {
      console.warn('Failed to import lovable-tagger:', error);
    }
  }

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
      componentTagger && mode === 'development' ? componentTagger() : null,
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        external: ["lovable-tagger"]
      },
      // Ensure ESM modules are properly handled
      commonjsOptions: {
        include: [/node_modules/],
        transformMixedEsModules: true
      }
    },
    optimizeDeps: {
      exclude: ['lovable-tagger']
    }
  };
});
