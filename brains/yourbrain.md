# Brain 2.0

## This is your brain, a place to store your thoughts, ideas, and knowledge

Vite + React + Tailwind CSS + TypeScript

Rehefa Vite + TS + "@/*":
Dia tsara atao resolve alias amin'ny `tsconfig.json` sy `vite.config.ts`:

```json
// tsconfig.json
{
  "compilerOptions": {  
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    hmr: {
      // protocol: 'ws',
      // host: 'localhost',
      overlay: false,
    },
  },
//   its `resolve.alias` is used to create an alias for the `@` symbol
  // which points to the `src` directory.
  // This allows you to import files using `@/` instead of relative paths.
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

```
