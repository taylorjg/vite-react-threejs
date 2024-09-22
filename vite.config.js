import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vite-react-threejs",
  plugins: [react(), nodePolyfills()],
  resolve: {
    // eslint-disable-next-line no-undef
    alias: [{ find: "@app", replacement: path.resolve(__dirname, "src") }],
  },
});
