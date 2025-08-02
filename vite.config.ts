import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split react and react-dom into separate chunk
          react: ['react', 'react-dom'],
          // Split three.js and react-three libraries into another
          three: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing', '@react-spring/three'],
          // Split framer-motion and gsap into animation chunk
          animation: ['framer-motion', 'gsap'],
          // You can add more chunks here if needed
        },
      },
    },
    chunkSizeWarningLimit: 1000,  // optional: increases warning limit to 1000kb
  },
});
