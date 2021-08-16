import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve as resovePath } from "path";

const resolve = (dir) => {
  return resovePath(__dirname, dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve("src"),
      Api: resolve("src/api"),
      Views: resolve("src/views"),
      Assets: resolve("src/assets"),
      Mixins: resolve("src/mixins"),
      Utils: resolve("src/utils"),
      Store: resolve("src/store"),
      Layout: resolve("src/components/layout"),
      Widgets: resolve("src/components/widgets")
    }
  }
});
