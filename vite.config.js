import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        portfolio: path.resolve(__dirname, 'portfolio/index.html'),
        services: path.resolve(__dirname, 'services/index.html'),
        about: path.resolve(__dirname, 'about/index.html'), 
        contact: path.resolve(__dirname, 'contact/index.html'),
        blog: path.resolve(__dirname, 'blog/index.html'),
      }
    }
  }
})