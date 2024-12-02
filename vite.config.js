import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs';
import path from 'path';
import viteCompression from 'vite-plugin-compression2';

export default defineConfig({
  base: 'expertlab-pt4-RyanVankriekinge',
  plugins: [
    vue(),
    {
      name: 'inject-preload-css',
      apply: 'build',
      writeBundle() {
        const __dirname = path.dirname(new URL(import.meta.url).pathname);
        const cssDir = path.resolve(__dirname, './src/assets'); 
        const htmlPath = path.resolve(__dirname, './index.html');
        const cssFiles = fs.readdirSync(cssDir);
        const cssFile = cssFiles.find(file => file.endsWith('.css'));

        if (!cssFile) {
          console.error('No CSS file found in the build output.');
          return;
        }
        const cssPath = `/assets/${cssFile}`;
        let htmlContent = fs.readFileSync(htmlPath, 'utf-8');
        const preloadLink = `<link rel="preload" href="${cssPath}" as="style">`;
        htmlContent = htmlContent.replace('</head>', `${preloadLink}\n</head>`);
        fs.writeFileSync(htmlPath, htmlContent);
      },
    },
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginalAssets: false,
      threshold: 10240,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
