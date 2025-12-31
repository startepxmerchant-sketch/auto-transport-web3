import { Button } from './ui/Button'
import { Phone, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 px-4 min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/UO0tUX3XWrE?autoplay=1&mute=1&loop=1&playlist=UO0tUX3XWrE&controls=0&showinfo=0&modestbranding=1&rel=0"
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ minWidth: '100vw', minHeight: '100vh' }}
          allow="autoplay; encrypted-media"
          title="Hero Background Video"
        />

      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center z-10">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-wider mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
          Local & Long Distance Transport
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4 uppercase text-white">Auto</h3>
            <img
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=400&auto=format&fit=crop"
              alt="Auto Transport"
              className="w-full h-40 rounded-xl object-cover"
            />
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4 uppercase text-white">Boat</h3>
            <img
              src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=400&auto=format&fit=crop"
              alt="Boat Transport"
              className="w-full h-40 rounded-xl object-cover"
            />
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4 uppercase text-white">Heavy Equipment</h3>
            <img
              src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=400&auto=format&fit=crop"
              alt="Heavy Equipment Transport"
              className="w-full h-40 rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent text-3xl font-bold uppercase mb-8 p-8 rounded-3xl border-4 border-red-500/50 backdrop-blur-sm bg-black/30">
          We Travel All Across the USA!
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 font-bold text-xl px-12 py-6">
            <Phone className="w-6 h-6 mr-2" />
            Call/Text: 305-209-5099
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 font-bold text-xl px-12 py-6">
            <MapPin className="w-6 h-6 mr-2" />
            Get Instant Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
