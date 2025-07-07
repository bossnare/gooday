import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // PWA configuration start
    // This plugin is used to configure the Progressive Web App (PWA) features
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Gooday Weather',
        short_name: 'Gooday',
        description: 'A simple weather app to check the weather of any city.',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    // PWA configuration end
  ],
  server: {
    port: 3000,
    hmr: {
      // protocol: 'ws',
      // host: 'localhost',
      overlay: true,
    },
  },
  // This is the alias configuration for resolving paths in the project
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // This is the base path for the project, useful for deployment
  base: './',
  build: {
    outDir: 'dist',
  },
});
