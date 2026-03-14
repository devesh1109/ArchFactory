import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex flex-col mb-4">
              <span className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">UrbanDesign</span>
              <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest leading-none">by Urban Hub</span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              The premier marketplace for architectural designs, blueprints, and 3D models.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-4 tracking-wide uppercase">Categories</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Residential Plans</Link></li>
              <li><Link href="#" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Commercial Space</Link></li>
              <li><Link href="#" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Interior Layouts</Link></li>
              <li><Link href="#" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Landscape Design</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-4 tracking-wide uppercase">For Vendors</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Sell your designs</Link></li>
              <li><Link href="#" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Vendor Dashboard</Link></li>
              <li><Link href="#" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Guidelines</Link></li>
              <li><Link href="#" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Payouts</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-4 tracking-wide uppercase">Support</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>© {new Date().getFullYear()} UrbanDesign.All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
