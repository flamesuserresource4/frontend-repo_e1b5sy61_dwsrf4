import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-orange-400"></div>
              <span className="font-semibold text-slate-900">Selly</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 max-w-xs">AI customer service for restaurants and commercial clients.</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link to="/about" className="hover:text-slate-900">About</Link></li>
              <li><Link to="/product" className="hover:text-slate-900">Product</Link></li>
              <li><Link to="/contact" className="hover:text-slate-900">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Terms</a></li>
              <li><a href="#" className="hover:text-slate-900">Privacy</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>support@selly.ai</li>
              <li>+1 (555) 000-0000</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} Selly, Inc. All rights reserved.</div>
      </div>
    </footer>
  )
}
