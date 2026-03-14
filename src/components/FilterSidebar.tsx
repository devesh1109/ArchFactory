import { Filter, SlidersHorizontal, Search } from "lucide-react";

export default function FilterSidebar() {
  return (
    <div className="w-full md:w-64 shrink-0 flex flex-col gap-8 sticky top-24">
      <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <h2 className="font-semibold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
          <Filter className="w-4 h-4" /> Filters
        </h2>
        <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700">Clear All</button>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">Style</h3>
        <div className="flex flex-col gap-3">
          {["Modern", "Minimalist", "Rustic", "Traditional", "Industrial"].map(style => (
            <label key={style} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-700 text-indigo-600 focus:ring-indigo-600 dark:bg-zinc-900" />
              <span className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors">{style}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">Property Type</h3>
        <div className="flex flex-col gap-3">
          {["Residential", "Commercial", "Landscape", "Interior"].map(type => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-700 text-indigo-600 focus:ring-indigo-600 dark:bg-zinc-900" />
              <span className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">Bedrooms</h3>
        <div className="flex flex-wrap gap-2">
          {["Any", "1", "2", "3", "4", "5+"].map((bed) => (
            <button key={bed} className="px-3 py-1.5 text-sm font-medium rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-colors">
              {bed}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">Price Range ($)</h3>
        <div className="flex items-center gap-2">
          <input type="number" placeholder="Min" className="w-full px-3 py-2 text-sm bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" />
          <span className="text-zinc-400">-</span>
          <input type="number" placeholder="Max" className="w-full px-3 py-2 text-sm bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" />
        </div>
        <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md transition-colors">
          Apply Price Filter
        </button>
      </div>
    </div>
  );
}
