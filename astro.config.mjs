import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://10bestliving.com",
  integrations: [tailwind()],
});
