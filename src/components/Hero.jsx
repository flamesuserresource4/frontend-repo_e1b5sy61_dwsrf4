import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16">
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900"
            >
              AI customer service for restaurants and commercial clients
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-4 text-lg text-slate-600"
            >
              Selly answers calls, messages and web chats instantly with a friendly voice assistant and smart inbox. Faster responses, happier customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-8 flex items-center gap-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-white shadow-md hover:bg-slate-800 transition"
              >
                Get started
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center rounded-xl px-5 py-3 text-slate-700 hover:text-slate-900"
              >
                See how it works
              </Link>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
                <div className="text-2xl font-semibold text-slate-900">24/7</div>
                <div className="text-xs text-slate-500">Availability</div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
                <div className="text-2xl font-semibold text-slate-900"><span className="align-baseline">-</span>60%</div>
                <div className="text-xs text-slate-500">Handle time</div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
                <div className="text-2xl font-semibold text-slate-900">+35%</div>
                <div className="text-xs text-slate-500">CSAT</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
