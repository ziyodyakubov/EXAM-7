import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@pages', replacement: '/src/pages'},
      { find: '@components', replacement: '/src/components'},
      { find: '@images', replacement: '/src/assets/images/index.tsx'},
      { find: '@pages', replacement: '/src/assets/pages'},
      { find: '@container', replacement: '/src/components/Containers/container/index.tsx'},
      { find: "@routes", replacement: '/src/routes'}
    ]
  }
})
