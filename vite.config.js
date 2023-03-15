import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://LuisHR20.github.io/Rick-and-Morty-React-vite/",
  plugins: [react()],
})
