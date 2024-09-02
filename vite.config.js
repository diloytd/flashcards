import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createSvgSpritePlugin({
    symbolId: 'icon-[name]-[hash]',
    include: ['**/icons/**.svg', '**/icons/sections/**.svg']
  }) ],
  server : {
    proxy : {
      "/api" : {
        target: "http://itgirlschool.justmakeit.ru",
        changeOrigin: true
      }
    }
  }
})
