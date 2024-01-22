import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-plugin-tsconfig-paths";
import eslint from "vite-plugin-eslint";
// import packageJson from "./package.json";

export default defineConfig({
  plugins: [react(), tsConfigPaths(), eslint()],
  define: {
    // PKG_VERSION: JSON.stringify(packageJson.version),
    PKG_VERSION: '"foo"',
  },
});
