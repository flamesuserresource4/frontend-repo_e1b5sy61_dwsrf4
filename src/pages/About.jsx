import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Our mission</h1>
          <p className="mt-4 text-slate-600">We believe every customer deserves a fast, friendly response. Selly brings AI voice and chat to restaurants and commercial teams so they can serve more guests without adding headcount.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-orange-400" />
              <div className="mt-4 font-semibold text-slate-900">Team member {i}</div>
              <div className="text-sm text-slate-600">Role</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
