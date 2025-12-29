import { useState } from 'react'
import axios from 'axios'
import { Button } from './ui/Button'
import { Search, Package, Wrench } from 'lucide-react'

export default function Shop() {
  const [partQuery, setPartQuery] = useState({
    vin: '',
    partName: '',
    year: '',
    make: '',
    model: ''
  })
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)

  const decodeVINForParts = async () => {
    if (!partQuery.vin) return
    setLoading(true)
    try {
      const response = await axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${partQuery.vin}?format=json`
      )
      const results = response.data.Results
      const make = results.find(r => r.Variable === 'Make')?.Value || ''
      const model = results.find(r => r.Variable === 'Model')?.Value || ''
      const year = results.find(r => r.Variable === 'Model Year')?.Value || ''
      
      setPartQuery(prev => ({ ...prev, make, model, year }))
      
      // Mock part search results
      setResults({
        parts: [
          { id: 1, name: 'Alternator', new: 250, used: 120, availability: 'In Stock' },
          { id: 2, name: 'Starter Motor', new: 180, used: 85, availability: 'In Stock' },
          { id: 3, name: 'Brake Pads (Set)', new: 95, used: 45, availability: '3 Available' }
        ],
        vehicle: `${year} ${make} ${model}`
      })
    } catch (error) {
      console.error('VIN decode failed:', error)
      alert('VIN decode failed. Please enter vehicle info manually.')
    } finally {
      setLoading(false)
    }
  }

  const searchPartsByName = async () => {
    setLoading(true)
    // Mock search - integrate with your inventory API
    setTimeout(() => {
      setResults({
        parts: [
          { id: 4, name: partQuery.partName, new: 199, used: 99, availability: 'Call for availability' }
        ],
        vehicle: partQuery.make ? `${partQuery.year} ${partQuery.make} ${partQuery.model}` : 'Universal'
      })
      setLoading(false)
    }, 1000)
  }

  return (
    <section id="shop" className="py-32 px-4 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 text-gradient">
          Parts & Tires Marketplace
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* VIN Search */}
          <div className="card-glass p-8">
            <div className="flex items-center mb-6">
              <Search className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold">Search by VIN</h3>
            </div>
            <input
              type="text"
              placeholder="Enter 17-digit VIN"
              className="w-full p-4 bg-white/20 border-2 border-yellow-400 rounded-xl mb-4 text-lg"
              value={partQuery.vin}
              onChange={e => setPartQuery({...partQuery, vin: e.target.value})}
              maxLength={17}
            />
            <input
              type="text"
              placeholder="Part name (e.g., alternator)"
              className="w-full p-4 bg-white/20 border-2 border-yellow-400 rounded-xl mb-6 text-lg"
              value={partQuery.partName}
              onChange={e => setPartQuery({...partQuery, partName: e.target.value})}
            />
            <Button onClick={decodeVINForParts} className="w-full btn-gradient py-4 text-lg" disabled={loading}>
              {loading ? 'Searching...' : 'Search Parts by VIN'}
            </Button>
          </div>

          {/* Manual Search */}
          <div className="card-glass p-8">
            <div className="flex items-center mb-6">
              <Wrench className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold">Manual Search</h3>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Year"
                className="w-full p-4 bg-white/20 border-2 border-yellow-400 rounded-xl"
                value={partQuery.year}
                onChange={e => setPartQuery({...partQuery, year: e.target.value})}
              />
              <input
                type="text"
                placeholder="Make"
                className="w-full p-4 bg-white/20 border-2 border-yellow-400 rounded-xl"
                value={partQuery.make}
                onChange={e => setPartQuery({...partQuery, make: e.target.value})}
              />
              <input
                type="text"
                placeholder="Model"
                className="w-full p-4 bg-white/20 border-2 border-yellow-400 rounded-xl"
                value={partQuery.model}
                onChange={e => setPartQuery({...partQuery, model: e.target.value})}
              />
              <input
                type="text"
                placeholder="Part name"
                className="w-full p-4 bg-white/20 border-2 border-yellow-400 rounded-xl"
                value={partQuery.partName}
                onChange={e => setPartQuery({...partQuery, partName: e.target.value})}
              />
              <Button onClick={searchPartsByName} className="w-full btn-gradient py-4 text-lg" disabled={loading}>
                Search Parts
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        {results && (
          <div className="card-glass p-8">
            <h3 className="text-3xl font-bold mb-6">Results for {results.vehicle}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {results.parts.map(part => (
                <div key={part.id} className="bg-white/10 p-6 rounded-xl border border-yellow-400/30">
                  <Package className="w-12 h-12 text-yellow-400 mb-4" />
                  <h4 className="text-xl font-bold mb-3">{part.name}</h4>
                  <div className="space-y-2 mb-4">
                    <p className="text-green-400">New: ${part.new}</p>
                    <p className="text-blue-400">Used: ${part.used}</p>
                    <p className="text-sm text-gray-300">{part.availability}</p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Add to Cart
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Tires */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Featured Tires</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { brand: 'Michelin Pilot Sport', price: 189, size: '225/45R17' },
              { brand: 'Goodyear Eagle F1', price: 165, size: '245/40R18' },
              { brand: 'Bridgestone Potenza', price: 145, size: '215/55R16' },
              { brand: 'Continental Premium', price: 210, size: '255/35R19' }
            ].map((tire, idx) => (
              <div key={idx} className="card-glass p-6 hover:scale-105 transition-transform">
                <div className="w-full h-32 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🛞</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{tire.brand}</h4>
                <p className="text-gray-400 text-sm mb-2">{tire.size}</p>
                <p className="text-2xl font-black text-yellow-400 mb-4">${tire.price}</p>
                <Button className="w-full btn-gradient">Buy Now</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
