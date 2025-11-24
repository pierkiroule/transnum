import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'gray-matter': '/src/lib/gray-matter.js'
    }
  },
  server: {
    port: 5173
  }
})
