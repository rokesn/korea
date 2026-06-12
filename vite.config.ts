import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    server: {
      port: 5000,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  },
  tanstackStart: {
    routesDirectory: "./src/routes",
    generatedRouteTree: "./src/routeTree.gen.ts",
    autoCodeSplitting: true,
    disableRouteGenerator: true,
  },
});
