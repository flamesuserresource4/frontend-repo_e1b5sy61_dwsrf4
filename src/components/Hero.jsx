import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { useCallback } from 'react'

export default function Hero() {
  // Mouse-parallax values for interactive depth
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.3 })
  const smy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.3 })

  const rotateY = useTransform(smx, [-0.5, 0.5], [-8, 8])
  const rotateX = useTransform(smy, [-0.5, 0.5], [8, -8])
  const translateX = useTransform(smx, [-0.5, 0.5], [-12, 12])
  const translateY = useTransform(smy, [-0.5, 0.5], [12, -12])

  const onMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(x)
    my.set(y)
  }, [mx, my])

  const onMouseLeave = useCallback(() => {
    mx.set(0)
    my.set(0)
  }, [mx, my])

  return (
    <section className="relative overflow-hidden">
      {/* Aurora gradient background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-32 -left-16 h-80 w-80 rounded-full blur-3xl"
          style={{ background:
            'radial-gradient(closest-side, rgba(99,102,241,0.35), transparent 70%)' }}
          animate={{ x: [0, 40, -20, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 -right-24 h-96 w-96 rounded-full blur-3xl"
          style={{ background:
            'radial-gradient(closest-side, rgba(56,189,248,0.25), transparent 70%)' }}
          animate={{ x: [0, -30, 10, 0], y: [0, 20, -25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full blur-3xl"
          style={{ background:
            'radial-gradient(closest-side, rgba(244,63,94,0.20), transparent 70%)' }}
          animate={{ x: [0, 15, -10, 0], y: [0, 25, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center py-20">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm text-slate-600 shadow-sm backdrop-blur"
            >
              <Sparkles className="h-4 w-4 text-indigo-600" />
              Now with smarter voice + live chat
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.6 }}
              className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900"
            >
              AI customer service for restaurants and commercial clients
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-lg text-slate-600"
            >
              Selly answers calls, messages and web chats instantly with a friendly voice assistant and smart inbox. Faster responses, happier customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              <Magnetic>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-white shadow-md transition will-change-transform"
                >
                  <span className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
                  Get started
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  to="/product"
                  className="inline-flex items-center rounded-xl px-5 py-3 text-slate-700 hover:text-slate-900"
                >
                  See how it works
                </Link>
              </Magnetic>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              {[{k:'24/7', l:'Availability'}, {k:'-60%', l:'Handle time'}, {k:'+35%', l:'CSAT'}].map((item) => (
                <motion.div
                  key={item.l}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="rounded-2xl border border-slate-200 p-4 shadow-sm bg-white/70 backdrop-blur"
                >
                  <div className="text-2xl font-semibold text-slate-900">{item.k}</div>
                  <div className="text-xs text-slate-500">{item.l}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              style={{ rotateX, rotateY, x: translateX, y: translateY, transformStyle: 'preserve-3d' }}
              className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl will-change-transform"
            >
              <motion.div style={{ transform: 'translateZ(40px)' }} className="absolute inset-0" />
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Magnetic({ children }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rsX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 })
  const rsY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 })

  const handleMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * 0.2)
    y.set(dy * 0.2)
  }, [x, y])

  const handleLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return (
    <motion.div style={{ x: rsX, y: rsY }} onMouseMove={handleMove} onMouseLeave={handleLeave} className="inline-block">
      {children}
    </motion.div>
  )
}
