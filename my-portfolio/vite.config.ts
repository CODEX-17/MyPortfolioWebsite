import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd());

  // Convert VITE_PORT to number, default to 3000 if not provided
  const port = parseInt(env.VITE_PORT || "3000", 10);

  console.log("VITE_PORT:", port); // Log the port for debugging

  return {
    plugins: [react(), svgr()],
    server: {
      host: "0.0.0.0",
      port: port,
    },
  };
});
