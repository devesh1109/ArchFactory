import Link from "next/link";
import { Trash2, ShieldCheck, ArrowRight } from "lucide-react";

export default function CartPage() {
  const CART_ITEMS = [
    {
      id: "d1",
      title: "Sleek 3-Floor Mountain Cabin",
      vendor: "Urban Nest Architects",
      price: 149.99,
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=200",
      format: "ZIP (AutoCAD, PDF, renders)"
    },
    {
      id: "d2",
      title: "Glass & Steel Startup Office",
      vendor: "Zaha Concepts",
      price: 499.00,
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=200",
      format: "ZIP (Revit, PDF, renders)"
    }
  ];

  const subtotal = CART_ITEMS.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="bg-zinc-50 dark:bg-zinc-900/30 min-h-screen pt-8 pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">Your Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Cart Items List */}
          <div className="flex-1 bg-white dark:bg-zinc-950 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
              {CART_ITEMS.length} Items in Cart
            </h2>
            
            <div className="flex flex-col gap-6">
              {CART_ITEMS.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800 last:border-0 last:pb-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 bg-zinc-100">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <Link href={`/designs/${item.id}`} className="font-bold text-zinc-900 dark:text-zinc-50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg line-clamp-1">{item.title}</Link>
                        <p className="text-sm text-zinc-500 mb-1">by {item.vendor}</p>
                        <span className="text-xs font-medium px-2 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-md text-zinc-600 dark:text-zinc-400">{item.format}</span>
                      </div>
                      <span className="font-bold text-lg text-zinc-900 dark:text-zinc-50">${item.price.toFixed(2)}</span>
                    </div>
                    
                    <div className="mt-auto flex justify-end">
                      <button className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-700 transition-colors">
                        <Trash2 className="w-4 h-4" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-white dark:bg-zinc-950 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                Order Summary
              </h2>
              
              <div className="flex flex-col gap-4 text-sm mb-6">
                <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                  <span>Subtotal</span>
                  <span className="font-medium text-zinc-900 dark:text-zinc-50">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                  <span>Estimated Tax</span>
                  <span className="font-medium text-zinc-900 dark:text-zinc-50">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                  <span>Delivery</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">Instant Download</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-4 border-t border-zinc-200 dark:border-zinc-800 mb-6">
                <span className="font-bold text-zinc-900 dark:text-zinc-50">Total</span>
                <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${total.toFixed(2)}</span>
              </div>
              
              <Link href="/checkout" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-center transition-all flex items-center justify-center gap-2 mb-4 shadow-lg shadow-indigo-600/20">
                Proceed to Checkout <ArrowRight className="w-5 h-5" />
              </Link>
              
              <div className="flex items-start gap-3 mt-6 bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Your purchase is secured. Files will be available immediately after successful payment processing via Stripe.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
