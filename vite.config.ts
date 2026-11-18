import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Base path relative for GitHub Pages compatibility:
export default defineConfig({
  plugins: [react()],
  base: './',
})
