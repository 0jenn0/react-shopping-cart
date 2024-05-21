import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      web3: "web3/dist/web3.min.js",
    },
  },
  base: "/react-shopping-cart/dist",
});
