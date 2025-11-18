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

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Features built for busy teams</h2>
          <p className="mt-3 text-slate-600">Everything you need to deliver fast, helpful customer service without more headcount.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition text-left"
            >
              <f.icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
