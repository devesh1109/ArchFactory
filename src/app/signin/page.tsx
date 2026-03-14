import Link from "next/link";
import { ArrowRight, Mail, Lock } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="min-h-[85vh] flex">
      {/* Left Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white dark:bg-zinc-950">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">Welcome back</h1>
            <p className="text-zinc-500 dark:text-zinc-400">Please enter your details to sign in.</p>
          </div>

          <form className="flex flex-col gap-5">
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

            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-700 text-indigo-600 focus:ring-indigo-600 dark:bg-zinc-900" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Remember for 30 days</span>
              </label>
              <Link href="#" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">Forgot password?</Link>
            </div>

            <button type="submit" className="w-full py-3.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-900 text-white font-bold rounded-lg transition-all mt-4 flex items-center justify-center gap-2">
              Sign In <ArrowRight className="w-4 h-4" />
            </button>
            
            <button type="button" className="w-full py-3.5 bg-white hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 font-bold rounded-lg transition-all flex items-center justify-center gap-2">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Sign in with Google
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
            Don't have an account? <Link href="/signup" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">Sign up</Link>
          </p>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="hidden lg:flex w-1/2 p-4">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="Sign In Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-10 right-10 z-20 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-2">"The best marketplace for commercial designs."</h2>
            <p className="text-white/80 font-medium">— Sarah Jenkins, Lead Architect at Urban Build</p>
          </div>
        </div>
      </div>
    </div>
  );
}
