import Link from "next/link";
import { ArrowLeft, ArrowRight, User, Mail, Lock, Building } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="min-h-[85vh] flex flex-row-reverse">
      {/* Right Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white dark:bg-zinc-950">
        <div className="w-full max-w-md">
          <Link href="/signin" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to sign in
          </Link>
          
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">Create an account</h1>
            <p className="text-zinc-500 dark:text-zinc-400">Join the premier architectural design marketplace.</p>
          </div>

          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">First Name</label>
                <div className="relative">
                  <input required type="text" placeholder="John" className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-white transition-shadow" />
                  <User className="w-5 h-5 text-zinc-400 absolute left-3 top-3.5" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Last Name</label>
                <div className="relative">
                  <input required type="text" placeholder="Doe" className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-white transition-shadow" />
                  <User className="w-5 h-5 text-zinc-400 absolute left-3 top-3.5" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Email</label>
              <div className="relative">
                <input required type="email" placeholder="you@example.com" className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-white transition-shadow" />
                <Mail className="w-5 h-5 text-zinc-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Password</label>
              <div className="relative">
                <input required type="password" placeholder="••••••••" className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-white transition-shadow" />
                <Lock className="w-5 h-5 text-zinc-400 absolute left-3 top-3.5" />
              </div>
            </div>

            {/* Account Type Selector Component */}
            <div className="flex flex-col gap-3 mt-2">
              <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">I want to...</label>
              <div className="flex gap-4">
                <label className="flex-1 cursor-pointer">
                  <input type="radio" name="accountType" value="customer" defaultChecked className="peer sr-only" />
                  <div className="flex items-center gap-3 p-4 rounded-lg border-2 border-zinc-200 dark:border-zinc-800 peer-checked:border-indigo-600 dark:peer-checked:border-indigo-400 peer-checked:bg-indigo-50 dark:peer-checked:bg-indigo-900/20 transition-all">
                    <User className="w-5 h-5 text-zinc-500 peer-checked:text-indigo-600" />
                    <span className="font-semibold text-zinc-900 dark:text-zinc-50">Buy Designs</span>
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input type="radio" name="accountType" value="vendor" className="peer sr-only" />
                  <div className="flex items-center gap-3 p-4 rounded-lg border-2 border-zinc-200 dark:border-zinc-800 peer-checked:border-indigo-600 dark:peer-checked:border-indigo-400 peer-checked:bg-indigo-50 dark:peer-checked:bg-indigo-900/20 transition-all">
                    <Building className="w-5 h-5 text-zinc-500 peer-checked:text-indigo-600" />
                    <span className="font-semibold text-zinc-900 dark:text-zinc-50">Sell Designs</span>
                  </div>
                </label>
              </div>
            </div>

            <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 text-white font-bold rounded-xl text-center transition-all flex items-center justify-center gap-2 mt-4 shadow-lg shadow-indigo-600/20">
              Create Account <ArrowRight className="w-5 h-5" />
            </button>
          </form>

        </div>
      </div>

      {/* Left Image Side */}
      <div className="hidden lg:flex w-1/2 p-4">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-indigo-900/30 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1542314831-c6a4d14eff8e?auto=format&fit=crop&q=80&w=1200" 
            alt="Sign Up Architecture" 
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[10s]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-md">Bring your blueprints to life.</h2>
            <p className="text-lg text-white/90 font-medium max-w-md mx-auto drop-shadow-sm">Join thousands of professionals trading architectural grade resources.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
