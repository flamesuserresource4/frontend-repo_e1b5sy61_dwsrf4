import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks — we\'ll be in touch soon!')
  }

  return (
    <div className="bg-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Contact us</h1>
            <p className="mt-4 text-slate-600">Tell us a bit about your business and we\'ll reach out with next steps for a quick demo.</p>
            <div className="mt-6 rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="font-semibold text-slate-900">Selly, Inc.</div>
              <div className="text-sm text-slate-600">support@selly.ai</div>
              <div className="text-sm text-slate-600">+1 (555) 000-0000</div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div>
              <label className="text-sm text-slate-700">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-sm text-slate-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-sm text-slate-700">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <button className="w-full rounded-xl bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Send</button>
            {status && <div className="text-sm text-green-600">{status}</div>}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
