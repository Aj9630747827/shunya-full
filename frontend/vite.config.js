import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'unironically-noncontending-dirk.ngrok-free.dev'
    ],
    port: 5173
  }
})
