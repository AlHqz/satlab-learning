import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ['lucide-react', 'react', 'react-dom', 'react-router-dom']
  },
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true
    }
  }
})
