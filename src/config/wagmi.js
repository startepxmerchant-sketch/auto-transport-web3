import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { sepolia, mainnet } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'AutoTransport Web3',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Get from https://cloud.walletconnect.com
  chains: [sepolia, mainnet],
  ssr: false,
})
