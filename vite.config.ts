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
        short_name: 'Gooday-app',
        description: 'A simple weather app to check the weather of any city.',
        theme_color: '#000000',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000', // fanampin'ny theme_color

        icons: [
          {
            src: '/icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      // This is the configuration for the service worker
      // It includes caching strategies and other PWA features
      workbox: {
        navigateFallback: undefined, // Disable navigate fallback for SPA
        globPatterns: ['**/*.{js,css,html,png,jpg,svg,ico}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.weatherapi\.com\//,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'weather-api-cache',
              expiration: {
                maxEntries: 50, // Maximum number of entries in the cache
                maxAgeSeconds: 24 * 60 * 60, // 1 day
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true, // Enable PWA in development mode
        type: 'module', // Use module type for service worker
      },
      injectRegister: 'auto', // Automatically inject the service worker registration script
      // This option allows the PWA to be registered automatically
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
