import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          web3: ['wagmi', 'viem', 'ethers', '@rainbow-me/rainbowkit']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'wagmi', 'viem']
  }
})
