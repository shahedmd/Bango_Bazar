"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/31862950/pexels-photo-31862950.jpeg?cs=srgb&dl=pexels-fotografia-lui-vlad-1445510816-31862950.jpg&fm=jpg",
    eyebrow: "Precision Repair Tools",
    title: "Professional tools for modern mobile technicians.",
    description:
      "Built around the world of Sunshine, Relife, Quick, GVM, and 2UUL style repair products.",
    buttonText: "Shop Tools",
    href: "/",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/6755056/pexels-photo-6755056.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6755056.jpg&fm=jpg",
    eyebrow: "Workshop Essentials",
    title: "Upgrade your bench with tools that support serious repair work.",
    description:
      "A cleaner ecommerce experience for technicians who care about speed, precision, and trust.",
    buttonText: "Explore Products",
    href: "/",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/6755092/pexels-photo-6755092.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6755092.jpg&fm=jpg",
    eyebrow: "Trusted Quality",
    title: "Repair parts, accessories, and precision tools in one place.",
    description:
      "Start with a focused product experience now, then scale cleanly into a real catalog later.",
    buttonText: "Browse Collection",
    href: "/",
  },
];

export default function HomeSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section className="px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[24px] bg-stone-950 sm:rounded-[28px]">
        <div className="relative h-[280px] sm:h-[340px] lg:h-[420px]">
          <Image
            src={activeSlide.image}
            alt={activeSlide.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-end px-4 py-5 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
            <div className="max-w-2xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-200 sm:text-xs sm:tracking-[0.24em]">
                {activeSlide.eyebrow}
              </p>

              <h1 className="mt-2 max-w-[16rem] text-[1.1rem] font-semibold leading-[1.2] text-white sm:mt-3 sm:max-w-[30rem] sm:text-[1.8rem] sm:leading-[1.15] lg:max-w-[36rem] lg:text-[2.3rem]">
                {activeSlide.title}
              </h1>

              <p className="mt-2 max-w-[17rem] text-[11px] leading-5 text-stone-200 sm:mt-3 sm:max-w-[30rem] sm:text-[13px] sm:leading-6 lg:max-w-[34rem] lg:text-[15px] lg:leading-6">
                {activeSlide.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-5">
                <Link
                  href={activeSlide.href}
                  className="rounded-full bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0d1f14] transition hover:bg-emerald-100 sm:px-6 sm:py-3 sm:text-sm sm:tracking-[0.16em]"
                >
                  {activeSlide.buttonText}
                </Link>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 sm:mt-6 sm:flex-nowrap">
              <div className="flex items-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      activeIndex === index ? "w-7 bg-white" : "w-2 bg-white/45"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      activeIndex === 0 ? slides.length - 1 : activeIndex - 1
                    )
                  }
                  className="rounded-full border border-white/25 px-3 py-1.5 text-[11px] text-white transition hover:border-white hover:bg-white/10 sm:px-4 sm:py-2 sm:text-sm"
                >
                  Prev
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((activeIndex + 1) % slides.length)
                  }
                  className="rounded-full border border-white/25 px-3 py-1.5 text-[11px] text-white transition hover:border-white hover:bg-white/10 sm:px-4 sm:py-2 sm:text-sm"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
