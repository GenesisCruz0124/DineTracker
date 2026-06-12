import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project is served from https://<user>.github.io/DineTracker/, so the
// production build needs that subpath as its base; dev stays at "/".
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/DineTracker/' : '/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
}))
