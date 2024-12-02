import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    {
      name: 'inject-preload-css',
      apply: 'build',
      buildEnd() {
        const __dirname = path.dirname(new URL(import.meta.url).pathname);
        const cssDir = path.resolve(__dirname, 'dist/assets');
        const htmlPath = path.resolve(__dirname, 'dist/index.html');

        if (!fs.existsSync(cssDir)) {
          console.error(`CSS directory not found: ${cssDir}`);
          return;
        }

        const cssFiles = fs.readdirSync(cssDir);
        const cssFile = cssFiles.find(file => file.endsWith('.css'));

        if (!cssFile) {
          console.error('No CSS file found in the build output.');
          return;
        }

        const cssPath = `/assets/${cssFile}`;

        if (!fs.existsSync(htmlPath)) {
          console.error(`HTML file not found: ${htmlPath}`);
          return;
        }

        let htmlContent = fs.readFileSync(htmlPath, 'utf-8');
        const preloadLink = `<link rel="preload" href="${cssPath}" as="style">`;
        htmlContent = htmlContent.replace('</head>', `${preloadLink}\n</head>`);
        fs.writeFileSync(htmlPath, htmlContent);
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
