// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    server: {
      port: 5000,
      host: "0.0.0.0",
      strictPort: true,
    },
    build: {
      rollupOptions: {
        output: {
          // Force ASCII-only chunk filenames so Korean route files don't produce
          // non-ASCII asset paths that fail on the static asset server.
          chunkFileNames: "assets/chunk-[hash].js",
          entryFileNames: "assets/entry-[hash].js",
          assetFileNames: "assets/[hash][extname]",
        },
      },
    },
  },
});
