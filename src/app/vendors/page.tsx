import { DollarSign, TrendingUp, Download, Eye, Plus, ArrowUpRight } from "lucide-react";

export default function VendorDashboard() {
  return (
    <div className="p-6 md:p-8">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Dashboard Overview</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Welcome back! Here's what's happening today.</p>
        </div>
        
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
          <Plus className="w-5 h-5" /> Upload Design
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Revenue", value: "$12,450.00", icon: DollarSign, trend: "+14.5%", up: true },
          { label: "Total Sales", value: "349", icon: TrendingUp, trend: "+5.2%", up: true },
          { label: "Downloads", value: "1,204", icon: Download, trend: "-2.1%", up: false },
          { label: "Profile Views", value: "8,924", icon: Eye, trend: "+24.1%", up: true },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                <stat.icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 ${stat.up ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30' : 'bg-red-100 text-red-700 dark:bg-red-900/30'}`}>
                {stat.up && <ArrowUpRight className="w-3 h-3" />} {stat.trend}
              </span>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">{stat.value}</h3>
              <p className="text-sm font-medium text-zinc-500 mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Sales */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
            <h2 className="font-bold text-zinc-900 dark:text-zinc-50">Recent Sales</h2>
            <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-900/50 text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                  <th className="px-6 py-4">Design</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {[
                  { name: "Sleek 3-Floor Mountain Cabin", date: "Oct 24, 2023", price: "$149.99", status: "Completed" },
                  { name: "Eco-Friendly Tiny House", date: "Oct 24, 2023", price: "$45.00", status: "Completed" },
                  { name: "Sleek 3-Floor Mountain Cabin", date: "Oct 23, 2023", price: "$149.99", status: "Completed" },
                  { name: "Industrial Loft Conversion", date: "Oct 22, 2023", price: "$110.00", status: "Completed" },
                  { name: "Suburban Family Home Blueprint", date: "Oct 21, 2023", price: "$89.00", status: "Refunded" },
                ].map((sale, i) => (
                  <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-zinc-900 dark:text-zinc-50">{sale.name}</td>
                    <td className="px-6 py-4 text-sm text-zinc-500">{sale.date}</td>
                    <td className="px-6 py-4 text-sm font-bold text-zinc-900 dark:text-zinc-50">{sale.price}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${sale.status === 'Completed' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30' : 'bg-red-100 text-red-700 dark:bg-red-900/30'}`}>
                        {sale.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Designs */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
            <h2 className="font-bold text-zinc-900 dark:text-zinc-50">Top Performing Designs</h2>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-6">
            {[
              { name: "Sleek 3-Floor Mountain Cabin", sales: 124, rev: "$18,598" },
              { name: "Suburban Family Home Blueprint", sales: 89, rev: "$7,921" },
              { name: "Eco-Friendly Tiny House", sales: 76, rev: "$3,420" }
            ].map((d, i) => (
              <div key={i} className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg shrink-0 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover opacity-80" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 truncate">{d.name}</h4>
                  <p className="text-xs text-zinc-500">{d.sales} sales • {d.rev} revenue</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-center">
            <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400">View Design Analytics</button>
          </div>
        </div>

      </div>

    </div>
  );
}
