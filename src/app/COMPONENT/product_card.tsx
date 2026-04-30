"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import UiFeedback from "./ui_feedback";
import type { Product } from "./data/product";

type ProductCardProps = {
  product: Product;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-BD", {
    maximumFractionDigits: 0,
  }).format(price);
}

function HeartIcon({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path
        d="M12.1 20.3 10.7 19C5.7 14.5 2.5 11.6 2.5 8.1 2.5 5.3 4.7 3.2 7.4 3.2c1.7 0 3.3.8 4.3 2.1 1-1.3 2.6-2.1 4.3-2.1 2.7 0 4.9 2.1 4.9 4.9 0 3.5-3.2 6.4-8.2 10.9l-1.4 1.3Z"
        fill={active ? "currentColor" : "none"}
      />
      <path d="m18.2 4.3.4 1.1 1.1.4-1.1.4-.4 1.1-.4-1.1-1.1-.4 1.1-.4.4-1.1Z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4.5 w-4.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H7" />
      <circle cx="10" cy="19" r="1.2" />
      <circle cx="18" cy="19" r="1.2" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (!showFeedback) return;

    const timer = setTimeout(() => {
      setShowFeedback(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, [showFeedback]);

  function handleWishlist() {
    const nextValue = !isWishlisted;
    setIsWishlisted(nextValue);
    setFeedbackMessage(
      nextValue
        ? `${product.name} added to wishlist`
        : `${product.name} removed from wishlist`
    );
    setShowFeedback(true);
  }

  function handleAddToCart() {
    setFeedbackMessage(`${product.name} added to cart`);
    setShowFeedback(true);
  }

  return (
    <>
      <article className="group overflow-hidden rounded-[24px] border border-stone-200/80 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
        <div className="flex flex-col sm:flex-row">
          <div className="relative h-56 sm:h-auto sm:w-[42%] sm:min-w-[220px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 40vw"
            />

            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />

            <div className="absolute left-3 top-3">
              <span className="rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0d1f14] shadow-sm backdrop-blur">
                {product.category}
              </span>
            </div>

            <button
              type="button"
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              onClick={handleWishlist}
              className={`absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full border shadow-sm backdrop-blur transition duration-300 ${
                isWishlisted
                  ? "border-rose-200 bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-[0_12px_30px_rgba(244,63,94,0.28)]"
                  : "border-white/70 bg-white/92 text-stone-700 hover:scale-105 hover:bg-white hover:text-rose-500"
              }`}
            >
              <HeartIcon active={isWishlisted} />
            </button>

            <div className="absolute bottom-3 left-3">
              <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur">
                In stock
              </span>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  {product.brand}
                </p>

                <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-snug text-stone-950 sm:text-[1.15rem]">
                  {product.name}
                </h3>
              </div>
            </div>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-stone-600">
              {product.shortDescription}
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-stone-100 bg-stone-50 p-2.5">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-stone-400">
                  Quality
                </p>
                <p className="mt-1 text-xs font-semibold text-stone-800">
                  Pro
                </p>
              </div>

              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-stone-400">
                  Use
                </p>
                <p className="mt-1 text-xs font-semibold text-stone-800">
                  Repair
                </p>
              </div>

              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-stone-400">
                  Stock
                </p>
                <p className="mt-1 text-xs font-semibold text-emerald-700">
                  Ready
                </p>
              </div>
            </div>

            <div className="mt-auto pt-5">
              <div className="flex items-end justify-between gap-3 border-t border-stone-100 pt-4">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-stone-400">
                    Price
                  </p>
                  <p className="mt-1 text-xl font-semibold text-[#0d1f14]">
                    Tk {formatPrice(product.price)}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleWishlist}
                  className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                    isWishlisted
                      ? "border-rose-100 bg-rose-50 text-rose-600 shadow-[0_10px_24px_rgba(244,63,94,0.12)] hover:bg-rose-100"
                      : "border-stone-200 text-stone-600 hover:border-stone-300 hover:text-rose-500"
                  }`}
                  aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <HeartIcon active={isWishlisted} />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="inline-flex h-12 min-w-0 items-center justify-center gap-2 rounded-full bg-[#0d1f14] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(13,31,20,0.22)] transition hover:bg-stone-950 focus:outline-none focus:ring-4 focus:ring-emerald-100"
                >
                  <CartIcon />
                  <span>Add to cart</span>
                </button>

                <Link
                  href={`/Product_details/${product.id}`}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-stone-200 text-stone-700 transition hover:border-stone-300 hover:bg-stone-50 hover:text-stone-950 focus:outline-none focus:ring-4 focus:ring-stone-100"
                  aria-label={`View details for ${product.name}`}
                  title="View details"
                >
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <UiFeedback message={feedbackMessage} isVisible={showFeedback} />
    </>
  );
}
