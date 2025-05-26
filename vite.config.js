import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // <-- Required for aliasing

export default defineConfig({
  base: '/my-portfolio/', // Deployment base path
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // <-- Adds @ as alias to src/
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});
