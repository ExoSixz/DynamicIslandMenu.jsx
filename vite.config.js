import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/DynamicIslandMenu.jsx/'   // 👈 ชื่อต้องตรงกับ repo
})
