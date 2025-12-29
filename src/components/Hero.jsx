import { Phone, MapPin, Truck, Ship, Construction } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-wider mb-8 text-gradient-yellow drop-shadow-2xl leading-tight">
            Local & Long Distance<br />Transport
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-4">
            Cars • Boats • Heavy Equipment
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-yellow-400/30 hover:border-yellow-400 transition-all hover:scale-105">
            <Truck className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-3xl font-black mb-4 text-gradient-yellow">AUTO</h3>
            <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center">
              <p className="text-gray-400 text-sm">🚗 Car Carrier Transport</p>
            </div>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-yellow-400/30 hover:border-yellow-400 transition-all hover:scale-105">
            <Ship className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-3xl font-black mb-4 text-gradient-yellow">BOAT</h3>
            <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center">
              <p className="text-gray-400 text-sm">⛵ Boat Trailer Transport</p>
            </div>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-yellow-400/30 hover:border-yellow-400 transition-all hover:scale-105">
            <Construction className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-3xl font-black mb-4 text-gradient-yellow">HEAVY EQUIPMENT</h3>
            <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center">
              <p className="text-gray-400 text-sm">🚜 Construction Equipment</p>
            </div>
          </div>
        </div>

        {/* USA Banner */}
        <div className="relative bg-gradient-to-r from-red-600 via-white to-blue-600 p-1 rounded-3xl mb-12">
          <div className="bg-blue-900 rounded-3xl px-8 py-12 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-gradient-yellow mb-4 uppercase">
              🇺🇸 We Travel All Across the USA! 🇺🇸
            </h2>
            <p className="text-xl text-yellow-300 font-semibold">
              New York • Chicago • Miami • Los Angeles • Seattle • And Everywhere In Between!
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="tel:3052095099" className="group flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 font-black text-2xl px-12 py-6 rounded-full shadow-2xl hover:scale-105 transition-all">
            <Phone className="w-8 h-8 group-hover:animate-bounce" />
            CALL/TEXT: 305-209-5099
          </a>
          <a href="#quote" className="flex items-center gap-3 border-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 font-black text-2xl px-12 py-6 rounded-full hover:scale-105 transition-all">
            <MapPin className="w-8 h-8" />
            Get Instant Quote
          </a>
        </div>
      </div>
    </section>
  )
}
