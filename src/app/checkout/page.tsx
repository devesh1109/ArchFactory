"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Lock, CreditCard } from "lucide-react";

export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const total = 700.91; // Mock total from cart

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API network request to Stripe
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900/30 px-4">
        <div className="bg-white dark:bg-zinc-950 p-8 md:p-12 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">Payment Successful!</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8">
            Thank you for your purchase. Your files are now ready to be downloaded.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/profile/purchases" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/20">
              Download Files
            </Link>
            <Link href="/" className="w-full py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 font-bold rounded-xl transition-all">
              Continue Browsing
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-50 dark:bg-zinc-900/30 min-h-screen pt-8 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">Checkout</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Payment Form */}
          <div className="flex-1 bg-white dark:bg-zinc-950 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6 md:p-8">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Payment Details</h2>
              <div className="flex gap-2 text-zinc-400">
                <CreditCard className="w-6 h-6" />
                <span className="font-semibold text-sm">Via Stripe</span>
              </div>
            </div>

            <form onSubmit={handlePayment} className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Email Address</label>
                <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-white" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Card Information</label>
                <div className="relative">
                  <input required type="text" placeholder="1234 5678 9101 1121" className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-white" />
                  <CreditCard className="w-5 h-5 text-zinc-400 absolute left-3 top-3.5" />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-2">
                   <input required type="text" placeholder="MM/YY" className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-white" />
                   <input required type="text" placeholder="CVC" className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-white" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Name on Card</label>
                <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-white" />
              </div>

              <button 
                type="submit" 
                disabled={isProcessing}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 text-white font-bold rounded-xl text-center transition-all flex items-center justify-center gap-2 mt-6 shadow-lg shadow-indigo-600/20"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <>
                    <Lock className="w-5 h-5" /> Pay ${total.toFixed(2)}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Quick Summary */}
          <div className="w-full md:w-80 shrink-0">
             <div className="bg-white dark:bg-zinc-950 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6 sticky top-24">
               <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">Order Total</h3>
               <div className="flex justify-between items-center mb-6">
                 <span className="text-zinc-600 dark:text-zinc-400">Total Purchase</span>
                 <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50">${total.toFixed(2)}</span>
               </div>
               
               <p className="text-xs text-zinc-500 mb-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                 By completing this purchase, you agree to our Terms of Service and understanding that digital files are non-refundable.
               </p>
               
               <div className="flex gap-2 opacity-50 justify-center">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-6 dark:invert" />
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
