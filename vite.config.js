import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://cassio9.github.io/travelCard/",
  plugins: [react()]
})
