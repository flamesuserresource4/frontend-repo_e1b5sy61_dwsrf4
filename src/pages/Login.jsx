import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Login() {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md mx-auto rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">Log in</h1>
          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm text-slate-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-sm text-slate-700">Password</label>
              <input type="password" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <button className="w-full rounded-xl bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Continue</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
