import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";

interface DesignCardProps {
  id: string;
  title: string;
  vendor: string;
  price: number;
  style: string;
  rating: number;
  reviews: number;
  imageUrl: string;
}

export default function DesignCard({
  id,
  title,
  vendor,
  price,
  style,
  rating,
  reviews,
  imageUrl,
}: DesignCardProps) {
  return (
    <div className="group flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-xl dark:hover:shadow-black/50 transition-all duration-300">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button aria-label="Add to Wishlist" className="p-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-full shadow-sm hover:text-red-500 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
          {style}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/designs/${id}`} className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 line-clamp-1">{title}</h3>
          </Link>
          <span className="font-bold text-zinc-900 dark:text-zinc-50 ml-2">${price.toFixed(2)}</span>
        </div>
        
        <Link href="/vendors" className="text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors line-clamp-1 mb-3">
          by {vendor}
        </Link>
        
        <div className="mt-auto flex items-center gap-1.5 text-sm">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="font-medium text-zinc-900 dark:text-zinc-50">{rating.toFixed(1)}</span>
          <span className="text-zinc-500">({reviews})</span>
        </div>
      </div>
    </div>
  );
}
