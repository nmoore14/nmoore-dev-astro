import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  integrations: [vue()]
});
