import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import myPlugin from './src/vite-plugin-myplugin/index.js'
import htmlPlugin from './src/vite-plugin-myplugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), htmlPlugin()]
})
