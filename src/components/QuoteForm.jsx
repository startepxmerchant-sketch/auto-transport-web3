import { useState } from 'react'
import axios from 'axios'
import { useAccount, useWriteContract } from 'wagmi'
import { Button } from './ui/Button'
import { parseUnits } from 'viem'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    vin: '', plate: '', state: 'FL', make: '', model: '', year: '', type: 'auto', origin: '', dest: ''
  })
  const [quote, setQuote] = useState(null)
  const [vehicleData, setVehicleData] = useState(null)
  const [loading, setLoading] = useState(false)
  const { address } = useAccount()
  const { writeContract } = useWriteContract()

  const decodeVIN = async () => {
    if (!formData.vin || formData.vin.length !== 17) {
      alert('Please enter a valid 17-digit VIN')
      return
    }
    setLoading(true)
    try {
      const res = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${formData.vin}?format=json`)
      const results = res.data.Results
      const make = results.find(r => r.Variable === 'Make')?.Value || ''
      const model = results.find(r => r.Variable === 'Model')?.Value || ''
      const year = results.find(r => r.Variable === 'Model Year')?.Value || ''
      
      if (!make || !model || !year) {
        alert('Could not decode VIN. Please enter vehicle info manually.')
        setLoading(false)
        return
      }
      
      setVehicleData({ make, model, year })
      setFormData(prev => ({ ...prev, make, model, year }))
    } catch (error) {
      console.error('VIN decode failed', error)
      alert('VIN decode failed. Please try again or enter vehicle info manually.')
    } finally {
      setLoading(false)
    }
  }

  const calculateQuote = () => {
    if (!formData.origin || !formData.dest) {
      alert('Please enter pickup and destination locations')
      return
    }

    // Simple distance-based pricing algorithm
    // In production, integrate with Google Maps Distance Matrix API
    const mockDistance = Math.floor(Math.random() * 2000) + 500 // 500-2500 miles
    const baseRate = formData.type === 'auto' ? 1.5 : formData.type === 'boat' ? 2.5 : 4.0
    const total = (mockDistance * baseRate) + 200
    
    setQuote({ 
      distance: mockDistance, 
      total: total.toFixed(2), 
      rate: baseRate,
      usdcAmount: parseUnits(total.toFixed(2), 6) // USDC has 6 decimals
    })
  }

  const bookWithCrypto = () => {
    if (!address) {
      alert('Please connect your wallet first')
      return
    }
    if (!quote) {
      alert('Please calculate a quote first')
      return
    }
    
    alert('Web3 payment integration coming soon! For now, please call 305-209-5099 to complete booking.')
    
    // Uncomment when smart contract is deployed:
    // writeContract({
    //   address: '0xYourTransportBookingContractAddress',
    //   abi: [...],
    //   functionName: 'createBooking',
    //   args: [quote.usdcAmount],
    // })
  }

  return (
    <section id="quote" className="py-32 px-4 bg-white/10 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Instant Quote Calculator
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Vehicle Info */}
          <div className="space-y-6">
            <div>
              <label className="block text-xl font-bold mb-2">VIN (Auto Decode)</label>
              <input
                className="w-full p-4 bg-white/20 border-2 border-yellow-400 rounded-xl text-lg"
                value={formData.vin}
                onChange={e => setFormData({...formData, vin: e.target.value.toUpperCase()})}
                placeholder="Enter 17-digit VIN"
                maxLength={17}
              />
              <Button 
                onClick={decodeVIN} 
                disabled={loading}
                className="mt-2 w-full bg-blue-900 hover:bg-blue-800 text-yellow-400"
              >
                {loading ? 'Decoding...' : 'Decode VIN'}
              </Button>
            </div>

            {vehicleData && (
              <div className="p-6 bg-green-500/20 border-2 border-green-400 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">
                  ✓ {vehicleData.year} {vehicleData.make} {vehicleData.model}
                </h3>
                <p className="text-sm text-gray-300">Vehicle successfully decoded from VIN</p>
              </div>
            )}

            <div>
              <label className="block text-xl font-bold mb-2">Vehicle Type</label>
              <select 
                className="w-full p-4 bg-white/20 border-2 border-yellow-400 rounded-xl text-lg"
                value={formData.type} 
                onChange={e => setFormData({...formData, type: e.target.value})}
              >
                <option value="auto">Car / Auto</option>
                <option value="boat">Boat / Watercraft</option>
                <option value="heavy">Heavy Equipment</option>
              </select>
            </div>
          </div>

          {/* Right Column - Location Info */}
          <div className="space-y-6">
            <div>
              <label className="block text-xl font-bold mb-2">Pickup Location</label>
              <input 
                className="w-full p-4 bg-white/20 border-2 border-yellow-400 rounded-xl text-lg" 
                value={formData.origin} 
                onChange={e => setFormData({...formData, origin: e.target.value})}
                placeholder="City, State or ZIP"
              />
            </div>

            <div>
              <label className="block text-xl font-bold mb-2">Destination</label>
              <input 
                className="w-full p-4 bg-white/20 border-2 border-yellow-400 rounded-xl text-lg" 
                value={formData.dest} 
                onChange={e => setFormData({...formData, dest: e.target.value})}
                placeholder="City, State or ZIP"
              />
            </div>

            <Button 
              onClick={calculateQuote} 
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 text-xl py-6 font-bold"
            >
              Calculate Quote
            </Button>
          </div>
        </div>

        {/* Quote Results */}
        {quote && (
          <div className="mt-8 p-8 bg-gradient-to-br from-green-500/30 to-blue-500/30 border-4 border-green-400 rounded-2xl">
            <h3 className="text-4xl font-black mb-4 text-green-400">${quote.total} Total</h3>
            <div className="space-y-2 mb-6 text-lg">
              <p>📍 Distance: <span className="font-bold">{quote.distance} miles</span></p>
              <p>💰 Rate: <span className="font-bold">${quote.rate}/mile</span></p>
              <p>📦 Vehicle: <span className="font-bold">{vehicleData ? `${vehicleData.year} ${vehicleData.make} ${vehicleData.model}` : formData.type}</span></p>
              <p>🚚 From: <span className="font-bold">{formData.origin}</span> → To: <span className="font-bold">{formData.dest}</span></p>
            </div>
            
            <div className="flex gap-4">
              <a href="tel:3052095099" className="flex-1">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-xl py-6 font-bold">
                  📞 Call to Book: 305-209-5099
                </Button>
              </a>
              {address && (
                <Button 
                  onClick={bookWithCrypto} 
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-xl py-6 font-bold"
                >
                  💳 Pay with Crypto
                </Button>
              )}
            </div>
            
            {!address && (
              <p className="text-center mt-4 text-sm text-gray-300">
                Connect wallet above to enable crypto payments
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
