import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: '$49', desc: 'For small teams getting started', features: ['Up to 500 interactions', 'Email support', 'Single location'] },
  { name: 'Growth', price: '$199', desc: 'For growing restaurants', features: ['Up to 5,000 interactions', 'Priority support', 'Multi-location', 'Analytics'] },
  { name: 'Enterprise', price: 'Let’s talk', desc: 'For large or custom needs', features: ['Unlimited interactions', 'SLA & SSO', 'Dedicated support', 'Custom integrations'] },
]

export default function Pricing() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Pick a plan that fits your volume today and scale as you grow.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl border border-slate-200 p-6 shadow-sm ${i===1 ? 'ring-2 ring-indigo-500' : ''}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-slate-900">{t.name}</h3>
                <div className="text-2xl font-semibold text-slate-900">{t.price}</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-2 text-sm font-medium ${i===1 ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'} transition`}>
                {i===2 ? 'Contact sales' : 'Start free trial'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
