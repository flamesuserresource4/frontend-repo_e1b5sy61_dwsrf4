import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'

export default function Product() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Product</h1>
            <p className="mt-4 text-slate-600">Selly combines a natural voice assistant, smart chat and a unified inbox so your team can focus on great service.</p>
          </div>
        </section>
        <HowItWorks />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
