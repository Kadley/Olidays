import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   // Permettra sur github pages, d'avoir le bon lien vers les fichiers css / js lorsque le github pages est public.
  // Quand un github pages est public, il est sur le lien https://<username>.github.io/<repo_name>
  // On va donc ajouter dans le base_url le nom du repo
  base: process.env.BASE_URL || '/',
})
