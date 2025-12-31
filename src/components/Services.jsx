import { Truck, Ship, Package, ShoppingCart, Gavel, ClipboardCheck } from 'lucide-react'
import backgroundImage from '../images/caterpillar-truck-excavator-ct660.jpg'

const services = [
  {
    icon: Truck,
    title: 'Auto Transport',
    description: 'Local & long-distance vehicle shipping across all 50 states. Safe, insured, and tracked.',
    features: ['Open & Enclosed Trailers', 'Door-to-Door Service', 'Real-time GPS Tracking']
  },
  {
    icon: Ship,
    title: 'Auto Export',
    description: 'International vehicle shipping with full customs support and documentation.',
    features: ['Worldwide Shipping', 'Customs Clearance', 'Port-to-Port Service']
  },
  {
    icon: Package,
    title: 'Car Parts (New & Used)',
    description: 'Extensive inventory of OEM and aftermarket parts with VIN compatibility checking.',
    features: ['VIN Decoder Search', 'Quality Guarantee', 'Fast Shipping']
  },
  {
    icon: ShoppingCart,
    title: 'New Tires',
    description: 'Premium tire brands at competitive prices with expert fitment guidance.',
    features: ['All Major Brands', 'Size Compatibility', 'Installation Available']
  },
  {
    icon: Gavel,
    title: 'Auto Buying Service',
    description: 'Direct access to major auto auctions. We source and deliver your dream vehicle.',
    features: ['Nationwide Auctions', 'Pre-Purchase Inspection', 'Delivery Included']
  },
  {
    icon: ClipboardCheck,
    title: 'Vehicle Inspections',
    description: '350-mile radius from Miami, FL. NFT-certified inspection reports on blockchain.',
    features: ['Certified Inspectors', 'Blockchain Records', 'Same-Day Reports']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white/5 style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/30 hover:border-yellow-400 transition-all hover:scale-105">
              <service.icon className="w-16 h-16 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
