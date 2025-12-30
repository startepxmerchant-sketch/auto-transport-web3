import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-blue-950/80 border-t border-yellow-400/30 py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src=""
                alt=""
                className="h-10 mr-3"
              />
              <h3 className="text-2xl font-black text-yellow-400">
                KSP<span className="text-orange-500">WAY</span>
              </h3>
            </div>

            <p className="text-gray-300 mb-4">
              Nationwide auto, boat, and heavy equipment transport with Web3-powered transparency.
            </p>

            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
              <Twitter className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
              <Instagram className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
              <li><a href="#quote" className="hover:text-yellow-400">Get Quote</a></li>
              <li><a href="#shop" className="hover:text-yellow-400">Shop Parts</a></li>
              <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Auto Transport</li>
              <li>Boat Transport</li>
              <li>Heavy Equipment</li>
              <li>Auto Export</li>
              <li>Parts Sales</li>
              <li>Inspections (Miami)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-yellow-400" />
                <a href="tel:3052095099" className="hover:text-yellow-400">
                  305-209-5099
                </a>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-yellow-400" />
                <a href="mailto:info@autotransport.com" className="hover:text-yellow-400">
                  info@autotransport.com
                </a>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-yellow-400" />
                <span className="text-gray-300">
                  Miami, FL<br />Nationwide Coverage
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-400/30 pt-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <img
              src="/api/placeholder/60/40"
              alt="USA Flag"
              className="mr-3 opacity-80"
            />
            <p className="text-2xl font-bold text-yellow-400">
              WE TRAVEL ALL ACROSS THE USA!
            </p>
          </div>

          <p className="text-gray-400 text-sm">
            © 2025 KspWay — A Ksp Enterprises Company. All rights reserved. | Blockchain-powered logistics.
          </p>
        </div>
      </div>
    </footer>
  )
}
