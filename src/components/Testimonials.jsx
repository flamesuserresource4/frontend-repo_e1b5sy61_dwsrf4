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
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Trusted by modern restaurants</h2>
            <p className="mt-3 text-slate-600">Selly helps hospitality teams answer more, wait less and delight every guest.</p>
            <div className="mt-6 rounded-2xl border border-slate-200 p-6 shadow-sm">
              <blockquote className="text-slate-700">
                “We cut missed calls to almost zero and our team has hours back every week.”
              </blockquote>
              <div className="mt-4 text-sm text-slate-500">— Jamie, Ops Manager at Firehouse Grill</div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {logos.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-slate-200 p-6 text-center text-slate-700 shadow-sm"
              >
                {logo.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
