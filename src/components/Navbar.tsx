import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">UrbanDesign</span>
              <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest leading-none">by Urban Hub</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link href="/search?category=residential" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">Residential</Link>
            <Link href="/search?category=commercial" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">Commercial</Link>
            <Link href="/search?category=3d-models" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">3D Models</Link>
            <Link href="/vendors" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">For Providers</Link>
          </div>

          <div className="flex items-center space-x-6">
            <button aria-label="Search" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/cart" aria-label="Cart" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-2 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</span>
            </Link>
            <div className="hidden sm:block w-px h-5 bg-zinc-200 dark:bg-zinc-800"></div>
            <Link href="/signin" aria-label="Profile" className="hidden sm:flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">
              <User className="w-5 h-5" />
              <span>Sign In</span>
            </Link>
            <button className="md:hidden text-zinc-600 dark:text-zinc-400">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
