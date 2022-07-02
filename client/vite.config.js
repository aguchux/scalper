import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/api/v1': {
      target: 'https://golojan-scalper.herokuapp.com/',
      changeOrigin: true,
      secure: true,
      ws: true,
    }
  }
})
