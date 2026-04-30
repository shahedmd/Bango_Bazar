"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import UiFeedback from "./ui_feedback";
import type { Product } from "./data/product";

type ProductCardProps = {
  product: Product;
};

function HeartIcon({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4.5 w-4.5"
      fill={active ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.5s-6.7-4.4-9-8.2C1.2 9.5 2.1 6 5.7 5.2c2-.4 3.5.3 4.5 1.7.9-1.4 2.5-2.1 4.5-1.7C18.3 6 19.2 9.5 21 12.3c-2.3 3.8-9 8.2-9 8.2Z" />
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
    >
      <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H7" />
      <circle cx="10" cy="19" r="1.2" />
      <circle cx="18" cy="19" r="1.2" />
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
      <article className="overflow-hidden rounded-[24px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
        <div className="relative h-48 sm:h-52">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
          />

          <button
            type="button"
            aria-label="Add to wishlist"
            onClick={handleWishlist}
            className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur transition ${
              isWishlisted
                ? "border-rose-200 bg-rose-500 text-white"
                : "border-white/60 bg-white/90 text-stone-700 hover:bg-white"
            }`}
          >
            <HeartIcon active={isWishlisted} />
          </button>
        </div>

        <div className="p-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            {product.brand}
          </p>

          <h3 className="mt-2 text-lg font-semibold text-stone-950">
            {product.name}
          </h3>

          <p className="mt-3 text-sm leading-7 text-stone-600">
            {product.shortDescription}
          </p>

          <div className="mt-5 flex flex-col items-start gap-3">
            <p className="text-base font-semibold text-[#0d1f14]">
              Tk {product.price}
            </p>

            <div className="flex w-full flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={handleWishlist}
                className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  isWishlisted
                    ? "bg-rose-50 text-rose-600 hover:bg-rose-100"
                    : "border border-stone-200 text-stone-700 hover:border-stone-300 hover:text-stone-950"
                }`}
              >
                <HeartIcon active={isWishlisted} />
                <span>{isWishlisted ? "Wishlisted" : "Wishlist"}</span>
              </button>

              <button
                type="button"
                onClick={handleAddToCart}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-stone-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#0d1f14]"
              >
                <CartIcon />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      <UiFeedback message={feedbackMessage} isVisible={showFeedback} />
    </>
  );
}
