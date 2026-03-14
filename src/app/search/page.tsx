import DesignCard from "@/components/DesignCard";
import FilterSidebar from "@/components/FilterSidebar";
import { SlidersHorizontal } from "lucide-react";

// Expanding the sample designs for the search page
const SEARCH_RESULTS = [
  {
    id: "d1", title: "Sleek 3-Floor Mountain Cabin", vendor: "Urban Nest Architects", price: 149.99, style: "Rustic", rating: 4.8, reviews: 124, imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d2", title: "Glass & Steel Startup Office", vendor: "Zaha Concepts", price: 499.00, style: "Modern", rating: 4.9, reviews: 56, imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d3", title: "Suburban Family Home Blueprint", vendor: "Classic Spaces", price: 89.00, style: "Traditional", rating: 4.5, reviews: 312, imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d4", title: "Minimalist Studio Apartment", vendor: "Zaha Concepts", price: 59.99, style: "Minimalist", rating: 4.7, reviews: 89, imageUrl: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d5", title: "Eco-Friendly Tiny House", vendor: "Green Builds", price: 45.00, style: "Modern", rating: 4.6, reviews: 201, imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d6", title: "Luxury Beachfront Villa", vendor: "Coastal Designs", price: 299.50, style: "Modern", rating: 5.0, reviews: 42, imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d7", title: "Industrial Loft Conversion", vendor: "Urban Nest Architects", price: 110.00, style: "Industrial", rating: 4.4, reviews: 76, imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d8", title: "A-Frame Cabin Blueprint", vendor: "Classic Spaces", price: 65.00, style: "Rustic", rating: 4.8, reviews: 430, imageUrl: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=800",
  }
];

export default function SearchPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">Explore Designs</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Showing 863 results for architectural designs</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          
          {/* Sidebar */}
          <div className="hidden md:block">
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            
            {/* Top Bar Controls */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
              <button className="md:hidden flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-md text-sm font-medium">
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
              
              <div className="flex items-center gap-3 ml-auto">
                <span className="text-sm text-zinc-500">Sort by:</span>
                <select className="bg-transparent text-sm font-medium text-zinc-900 dark:text-zinc-50 focus:outline-none cursor-pointer">
                  <option>Featured</option>
                  <option>Newest Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Top Rated</option>
                </select>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SEARCH_RESULTS.map((design) => (
                <DesignCard key={design.id} {...design} />
              ))}
            </div>

            {/* Pagination Mock */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-2">
                <button className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-md text-sm font-medium text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors" disabled>Previous</button>
                <button className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-md text-sm font-medium">1</button>
                <button className="w-10 h-10 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-md text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">2</button>
                <button className="w-10 h-10 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-md text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">3</button>
                <span className="px-2 text-zinc-500">...</span>
                <button className="w-10 h-10 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-md text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">12</button>
                <button className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-md text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">Next</button>
              </nav>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
