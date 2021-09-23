import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import myPlugin from './src/vite-plugin-myplugin/index.js'
import htmlPlugin from './src/vite-plugin-myplugin'
// import htmlPlugin from './src/plugin/global-styles'
// import htmlPlugin from 'vite-plugin-assets'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),htmlPlugin()
  ]
})
