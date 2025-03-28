import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from the network
    port: 3000, // Port for the server
    mimeTypes: {
      'ttf': 'font/ttf',
    }
  },
})
