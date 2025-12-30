import { Button } from './ui/Button'
import { Phone, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4">
      {/* Background with Highway Image */}
      <div className="absolute inset-0">
        <img 
          src="https://drive.google.com/file/d/1zKpQs0XmDuiNGMf-m3RNJpnRGEbTgelX/view?usp=sharing" 
          alt="Highway" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20" />
      </div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-wider mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
          Local & Long Distance Transport
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4 uppercase">Auto</h3>
            <img
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=400&auto=format&fit=crop"
              alt="Auto Transport"
              className="w-full h-40 rounded-xl object-cover"
            />
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4 uppercase">Boat</h3>
            <img
              src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=400&auto=format&fit=crop"
              alt="Boat Transport"
              className="w-full h-40 rounded-xl object-cover"
            />
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4 uppercase">Heavy Equipment</h3>
            <img
              src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=400&auto=format&fit=crop"
              alt="Heavy Equipment Transport"
              className="w-full h-40 rounded-xl object-cover"
            />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent text-3xl font-bold uppercase mb-8 p-8 rounded-3xl border-4 border-red-500/50 backdrop-blur-sm">
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
