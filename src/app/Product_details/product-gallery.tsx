"use client";

import Image from "next/image";
import { useState } from "react";

type ProductGalleryProps = {
  images: string[];
  name: string;
  brand: string;
  category: string;
};

export default function ProductGallery({
  images,
  name,
  brand,
  category,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];
  const hasMultipleImages = images.length > 1;

  return (
    <div className="lg:sticky lg:top-24">
      <div
        className={`grid gap-4 ${
          hasMultipleImages ? "lg:grid-cols-[88px_minmax(0,1fr)]" : ""
        }`}
      >
        {hasMultipleImages ? (
          <div className="order-2 flex gap-3 overflow-x-auto pb-1 lg:order-1 lg:flex-col lg:overflow-visible">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show product image ${index + 1}`}
                className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border bg-white transition ${
                  activeIndex === index
                    ? "border-[#0d1f14] shadow-[0_12px_26px_rgba(13,31,20,0.16)]"
                    : "border-stone-200 hover:border-stone-300"
                }`}
              >
                <Image
                  src={image}
                  alt={`${name} view ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        ) : null}

        <div className="order-1 overflow-hidden rounded-[28px] border border-stone-200/80 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="relative aspect-[1/1] sm:aspect-[1.05/1]">
            <Image
              src={activeImage}
              alt={name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />

            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />

            <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/96 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0d1f14] shadow-sm">
                {brand}
              </span>
              <span className="rounded-full border border-white/25 bg-white/14 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur">
                {category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
