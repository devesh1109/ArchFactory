import { LayoutDashboard, Package, UploadCloud, Settings, Bell, MessageSquare, LogOut } from "lucide-react";
import Link from "next/link";

export default function VendorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col shrink-0 hidden md:flex">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex justify-center items-center text-white font-bold text-xl">U</div>
            <div>
              <p className="font-bold text-zinc-900 dark:text-zinc-50 text-sm">Urban Nest</p>
              <p className="text-xs text-zinc-500">Vendor ID: #8921</p>
            </div>
          </div>
          
          <nav className="flex flex-col gap-2">
            <Link href="/vendors" className="flex items-center gap-3 px-3 py-2.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg">
              <LayoutDashboard className="w-5 h-5" /> Dashboard
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium rounded-lg transition-colors">
              <Package className="w-5 h-5" /> My Designs
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium rounded-lg transition-colors">
              <UploadCloud className="w-5 h-5" /> Upload New
            </Link>
            <Link href="#" className="flex items-center justify-between px-3 py-2.5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5" /> Messages
              </div>
              <span className="bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium rounded-lg transition-colors">
              <Settings className="w-5 h-5" /> Settings
            </Link>
          </nav>
        </div>
        
        <div className="mt-auto p-6 border-t border-zinc-200 dark:border-zinc-800">
          <button className="flex items-center gap-3 px-3 py-2.5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium rounded-lg transition-colors w-full">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto w-full">
        {children}
      </main>
    </div>
  );
}
