import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    modulePreload: {
      // Không nhúng bản đồ hàng trăm dependency của các màn hình học tập vào
      // bundle landing. Trình duyệt chỉ tải dependency khi route lazy được mở.
      resolveDependencies: (_filename, deps, context) => context.hostType === 'html' ? deps : [],
    },
  },
  optimizeDeps: {
    include: ['recharts', 'react-is', 'lucide-react', 'react-router-dom', 'firebase/app', 'firebase/auth', 'firebase/firestore'],
  },
})

