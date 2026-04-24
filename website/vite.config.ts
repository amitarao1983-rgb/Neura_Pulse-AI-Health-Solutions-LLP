import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project URL: /<repo>/
const repoBase = '/Neura_Pulse-AI-Health-Solutions-LLP/'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Subpath only when building on GitHub Actions (Pages). Local dev stays at "/".
  base: process.env.GITHUB_ACTIONS ? repoBase : '/',
})
