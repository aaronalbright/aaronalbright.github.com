import { defineConfig } from 'vite';
import svelte from '@sveltejs/vite-plugin-svelte';
// import postcssNesting from 'postcss-nesting';
// import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('postcss-nesting')
      ],
    },
  },
});
