import { motion } from 'framer-motion'
import { ShieldCheck, Gauge, Mic, BarChart3, Globe, Sparkles } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Enterprise-grade security', desc: 'SOC2-ready infrastructure, encrypted data and role-based controls.' },
  { icon: Gauge, title: 'Fast and accurate', desc: 'Under-a-second first response and high intent recognition.' },
  { icon: Mic, title: 'Natural voice', desc: 'Human-like voice assistant that sounds friendly and professional.' },
  { icon: BarChart3, title: 'Actionable analytics', desc: 'Clear dashboards for volume, CSAT, missed calls and more.' },
  { icon: Globe, title: 'Omnichannel', desc: 'Phone, web chat and SMS in one place with smart routing.' },
  { icon: Sparkles, title: 'Custom knowledge', desc: 'Trained on your menu, policies and brand guidelines.' },
]

const cardVariants = {
  initial: { y: 8, opacity: 0 },
  inview: (i) => ({ y: 0, opacity: 1, transition: { delay: i * 0.05, duration: 0.5 } }),
}

export default function Features() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* floating spark particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-indigo-500/40"
            style={{ top: `${(i * 73) % 100}%`, left: `${(i * 41) % 100}%` }}
            animate={{ y: [0, -8, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Features built for busy teams</h2>
          <p className="mt-3 text-slate-600">Everything you need to deliver fast, helpful customer service without more headcount.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <TiltCard key={f.title} index={i} Icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TiltCard({ index, Icon, title, desc }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="initial"
      whileInView="inview"
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-slate-200 p-6 shadow-sm bg-white/70 backdrop-blur overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition"
        style={{ background: 'radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(99,102,241,0.12), transparent 40%)' }}
      />
      <Icon className="h-6 w-6 text-indigo-600" />
      <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </motion.div>
  )
}
