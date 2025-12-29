import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import QuoteForm from './components/QuoteForm'
import Shop from './components/Shop'
import Tracking from './components/Tracking'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <QuoteForm />
      <Shop />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
