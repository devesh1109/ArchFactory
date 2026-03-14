"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrentIndex(i => (i === images.length - 1 ? 0 : i + 1));

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden group">
        <Image
          src={images[currentIndex]}
          alt={`Preview ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        
        {/* Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={prev} className="w-10 h-10 flex items-center justify-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-full shadow-sm hover:bg-white dark:hover:bg-zinc-900 transition-colors text-zinc-900 dark:text-white">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="w-10 h-10 flex items-center justify-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-full shadow-sm hover:bg-white dark:hover:bg-zinc-900 transition-colors text-zinc-900 dark:text-white">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-full shadow-sm hover:bg-white dark:hover:bg-zinc-900 transition-colors opacity-0 group-hover:opacity-100 text-zinc-900 dark:text-white">
          <Expand className="w-4 h-4" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-3">
        {images.map((img, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
              currentIndex === idx ? "border-indigo-600 dark:border-indigo-400" : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
