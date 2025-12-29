import { Truck, Ship, Package, ShoppingCart, Gavel, ClipboardCheck } from 'lucide-react'

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
    <section className="py-20
