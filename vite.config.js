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
      buildStart() {
        console.log('Plugin initialized during build');
      },
      buildEnd() {
        console.log('Plugin finished build processing');
        const cssDir = path.resolve('dist', 'assets');
        const htmlPath = path.resolve('dist', 'index.html');

        if (!fs.existsSync(cssDir)) {
          console.error(`CSS directory not found: ${cssDir}`);
          return;
        }

        const cssFiles = fs.readdirSync(cssDir);
        console.log("CSS files found:", cssFiles);

        const cssFile = cssFiles.find(file => file.startsWith('index-') && file.endsWith('.css'));

        if (!cssFile) {
          console.error('No main CSS file found in the build output.');
          return;
        }

        console.log(`Main CSS file found: ${cssFile}`);

        const cssPath = `/assets/${cssFile}`;

        if (!fs.existsSync(htmlPath)) {
          console.error(`HTML file not found: ${htmlPath}`);
          return;
        }

        let htmlContent = fs.readFileSync(htmlPath, 'utf-8');
        const preloadLink = `<link rel="preload" href="${cssPath}" as="style">`;
        console.log(`Injecting preload link: ${preloadLink}`);

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
