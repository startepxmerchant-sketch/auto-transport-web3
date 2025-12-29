import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { sepolia, mainnet } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'AutoTransport Web3',
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'demo_project_id',
  chains: [sepolia, mainnet],
  ssr: false,
})
