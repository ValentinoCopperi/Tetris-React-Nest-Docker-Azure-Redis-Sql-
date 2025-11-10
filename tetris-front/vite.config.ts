import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // Necesario para que Vite funcione en Docker
    port: 5173,
    watch: {
      usePolling: true, // Necesario para hot reload en Docker Windows
    },
  },
})
