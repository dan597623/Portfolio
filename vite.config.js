import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: { jsx: 'automatic' },
  build: {
    rollupOptions: {
      output: { manualChunks: id => id.includes('node_modules') ? 'vendor' : undefined },
    },
  },
});
