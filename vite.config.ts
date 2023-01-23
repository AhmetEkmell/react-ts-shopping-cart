import { GITHUB_REPO_NAME } from './src/constants/urlConstants.js';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: GITHUB_REPO_NAME,  
  plugins: [react()],
})
