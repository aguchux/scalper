import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  Proxy: {
    host: true,
    target: {
      "/api/v1": "https://golojan-scalper.herokuapp.com"
    }
  }
})
