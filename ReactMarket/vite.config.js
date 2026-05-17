import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // добавьте эту строку

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // и эту
  ],
})
