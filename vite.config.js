import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',  build: {
    outDir: 'docs' // build output to /docs folder
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
