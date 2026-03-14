import Link from "next/link";
import DesignCard from "@/components/DesignCard";
import { ArrowRight, Box, Building2, Home, Trees } from "lucide-react";

const SAMPLE_DESIGNS = [
  {
    id: "d1",
    title: "Sleek 3-Floor Mountain Cabin",
    vendor: "Urban Nest Architects",
    price: 149.99,
    style: "Rustic",
    rating: 4.8,
    reviews: 124,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d2",
    title: "Glass & Steel Startup Office",
    vendor: "Zaha Concepts",
    price: 499.00,
    style: "Modern",
    rating: 4.9,
    reviews: 56,
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d3",
    title: "Suburban Family Home Blueprint",
    vendor: "Classic Spaces",
    price: 89.00,
    style: "Traditional",
    rating: 4.5,
    reviews: 312,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "d4",
    title: "Minimalist Studio Apartment",
    vendor: "Zaha Concepts",
    price: 59.99,
    style: "Minimalist",
    rating: 4.7,
    reviews: 89,
    imageUrl: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800",
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-zinc-900/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=2000&q=80" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            Blueprint your vision.
          </h1>
          <p className="text-lg md:text-2xl text-zinc-200 mb-10 max-w-2xl mx-auto font-light">
            Discover thousands of world-class architectural designs, floor plans, and 3D models from top professionals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/search" className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 font-bold rounded-lg hover:bg-zinc-100 transition-colors shadow-lg">
              Browse Designs
            </Link>
            <Link href="/vendors" className="w-full sm:w-auto px-8 py-4 bg-zinc-900/40 text-white font-semibold rounded-lg hover:bg-zinc-900/60 backdrop-blur-md border border-white/20 transition-all shadow-lg">
              Start Selling
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">Explore Categories</h2>
              <p className="text-zinc-500 dark:text-zinc-400">Find the perfect foundation for your next project.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/search?category=residential" className="group relative h-48 rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 p-6 flex flex-col justify-end hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-zinc-900/90 p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                <Home className="w-6 h-6 text-zinc-900 dark:text-zinc-50" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 z-10">Residential</h3>
            </Link>
            <Link href="/search?category=commercial" className="group relative h-48 rounded-2xl overflow-hidden bg-indigo-100 dark:bg-indigo-950/30 p-6 flex flex-col justify-end hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-zinc-900/90 p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 z-10">Commercial</h3>
            </Link>
            <Link href="/search?category=landscape" className="group relative h-48 rounded-2xl overflow-hidden bg-emerald-100 dark:bg-emerald-950/30 p-6 flex flex-col justify-end hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-zinc-900/90 p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                <Trees className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 z-10">Landscape</h3>
            </Link>
            <Link href="/search?category=3d-models" className="group relative h-48 rounded-2xl overflow-hidden bg-amber-100 dark:bg-amber-950/30 p-6 flex flex-col justify-end hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-zinc-900/90 p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                <Box className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 z-10">3D Models</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">Trending Architecture</h2>
              <p className="text-zinc-500 dark:text-zinc-400">The most downloaded designs this week.</p>
            </div>
            <Link href="/search?sort=trending" className="hidden sm:flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SAMPLE_DESIGNS.map((design) => (
              <DesignCard key={design.id} {...design} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
