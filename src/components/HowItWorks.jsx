import { motion } from 'framer-motion'
import { Phone, MessageCircle, Headphones, Bot } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    title: 'Picks up every call',
    desc: 'Selly answers instantly with a natural voice, handles bookings, and routes complex questions.'
  },
  {
    icon: MessageCircle,
    title: 'Replies to chats',
    desc: 'Web chat and SMS are handled with accurate, brand-safe responses trained on your menu and policies.'
  },
  {
    icon: Headphones,
    title: 'Hands off to staff',
    desc: 'Seamlessly escalates to your team when human touch is needed—no dropped context.'
  },
  {
    icon: Bot,
    title: 'Learns over time',
    desc: 'Gets smarter with every interaction to reduce handle time and improve CSAT.'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">How Selly works</h2>
          <p className="mt-3 text-slate-600">Plug Selly into your phone, website and inbox. It handles the rest with a friendly AI assistant.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <s.icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
