import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";
import rollupPluginGas from "rollup-plugin-google-apps-script";
import path from "path";

export default defineConfig({
  plugins: [typescript(), rollupPluginGas()],
  build: {
    rollupOptions: {
      input: "./src/main.ts",
      output: {
        dir: "./dist",
        entryFileNames: "[name].js",
      },
    },
    minify: false, // This option is requred.
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
