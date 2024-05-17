import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import setting from "./src/setting";
import { viteMockServe } from "vite-plugin-mock";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log(command, mode, env.VITE_APP_PROXY_URL);
  return {
    base: setting.viteBasePath,
    plugins: [
      vue(),
      viteMockServe({
        mockPath: "mock",
        enable: env.VITE_APP_MOCK === "true"
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    },
    server: {
      hmr: { overlay: false },
      port: 8080,
      open: false,
      host: "0.0.0.0",
      https: false,
      proxy: {
        "/api": {
          target: env.VITE_APP_PROXY_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        }
      }
    }
  };
});

