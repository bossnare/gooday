import { pwaConfig } from './src/configs/pwa.config';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // PWA configuration start
    pwaConfig,
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
