
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Критично для GitHub Pages, чтобы ресурсы грузились относительно папки репозитория
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'three'],
          ui: ['lucide-react', '@react-three/fiber', '@react-three/drei']
        }
      }
    }
  }
});
