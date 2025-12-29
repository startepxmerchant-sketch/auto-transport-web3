import { useState, useEffect } from 'react'
import { useAccount, useReadContract } from 'wagmi'
import { MapPin, Package, CheckCircle, Clock } from 'lucide-react'

export default function TrackingDashboard() {
  const [bookingId, setBookingId] = useState('')
  const [status, setStatus] = useState(null)
  const { address } = useAccount()

  const statuses = [
    { label: 'Booking Confirmed', icon: CheckCircle, completed: true },
    { label: 'Vehicle Picked Up', icon: Package, completed: true },
    { label: 'In Transit', icon: Clock, completed: true },
    { label: 'Delivered', icon: MapPin, completed: false }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-12 text-yellow-400">
          Track Your Shipment
        </h2>
        <div className="bg-white/10 p-8 rounded-2xl border border-yellow-400/30">
          <input
            type="text"
            placeholder="Enter Booking ID"
            className="w-full p-4 bg-white/20 border-2 border-yellow-400 rounded-xl mb-8"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
          />

          <div className="space-y-6">
            {statuses.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-6 ${item.completed ? 'bg-green-500' : 'bg-gray-600'}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{item.label}</h3>
                  <p className="text-gray-400 text-sm">
                    {item.completed ? 'Completed' : 'Pending'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-500/20 rounded-xl border border-blue-400">
            <h4 className="text-lg font-bold mb-2">🔗 Blockchain Verified</h4>
            <p className="text-sm text-gray-300">
              All tracking updates are recorded on-chain for immutable proof. View transaction: 
              <a href="#" className="text-yellow-400 ml-2 underline">0x1234...5678</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
