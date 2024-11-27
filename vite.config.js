import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression2';

// https://vite.dev/config/
export default defineConfig({
  base: 'expertlab-pt4-RyanVankriekinge',
  plugins: [
    vue(),
    viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        deleteOriginalAssets: false,
        threshold: 10240,
    }),
],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
