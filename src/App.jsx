import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { config } from './config/wagmi'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import QuoteForm from './components/QuoteForm'
import Shop from './components/Shop'
import TrackingDashboard from './components/TrackingDashboard'
import Footer from './components/Footer'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-yellow-300">
            <Navbar />
            <Hero />
            <Services />
            <QuoteForm />
            <TrackingDashboard />
            <Shop />
            <Footer />
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
