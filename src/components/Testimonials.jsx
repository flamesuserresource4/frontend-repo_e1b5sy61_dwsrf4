import { motion } from 'framer-motion'

const logos = [
  { name: 'Urban Bites' },
  { name: 'Sea & Salt' },
  { name: 'Green Bowl' },
  { name: 'Firehouse Grill' },
  { name: 'Café Aurora' },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Trusted by modern restaurants</h2>
            <p className="mt-3 text-slate-600">Selly helps hospitality teams answer more, wait less and delight every guest.</p>
            <div className="mt-6 rounded-2xl border border-slate-200 p-6 shadow-sm bg-white/70 backdrop-blur">
              <blockquote className="text-slate-700">
                “We cut missed calls to almost zero and our team has hours back every week.”
              </blockquote>
              <div className="mt-4 text-sm text-slate-500">— Jamie, Ops Manager at Firehouse Grill</div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <LogoMarquee />
          </div>
        </div>
      </div>
    </section>
  )
}

function LogoMarquee() {
  const items = [...logos, ...logos]
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm">
      <motion.div
        className="flex gap-6 whitespace-nowrap py-6 will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((logo, i) => (
          <div key={i} className="shrink-0 rounded-xl border border-slate-200 px-6 py-4 text-slate-700 bg-white">
            {logo.name}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
