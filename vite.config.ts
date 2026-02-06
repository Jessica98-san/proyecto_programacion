import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/weather': {
        target: 'https://api.openweathermap.org/data/2.5',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/weather/, ''),
      },
      '/api/icons': {
        target: 'https://openweathermap.org/img/wn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/icons/, ''),
      },
    },
  },
})
