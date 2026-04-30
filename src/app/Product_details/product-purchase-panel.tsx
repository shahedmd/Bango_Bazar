"use client";

import { useEffect, useState } from "react";
import UiFeedback from "../COMPONENT/ui_feedback";

type ProductPurchasePanelProps = {
  name: string;
  price: number;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-BD", {
    maximumFractionDigits: 0,
  }).format(price);
}

function WhatsappIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4.5 w-4.5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20 12a8 8 0 0 1-11.8 7l-4.2 1.1 1.1-4A8 8 0 1 1 20 12Zm-8-6.5a6.5 6.5 0 0 0-5.6 9.8l.2.3-.7 2.3 2.4-.6.2.1A6.5 6.5 0 1 0 12 5.5Zm3.7 8.2c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.6.1-.7.7-.8.8-.3.2-.5.1a5.3 5.3 0 0 1-2.6-2.3c-.1-.2 0-.4.1-.5l.4-.5.2-.4a.5.5 0 0 0 0-.5c0-.1-.6-1.3-.8-1.7-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.4-.2.2-.9.9-.9 2.1s.9 2.4 1 2.5A9.3 9.3 0 0 0 12.1 16c2 .8 2 .5 2.4.5s1.3-.5 1.5-1 .2-.9.2-1-.2-.1-.4-.2Z" />
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

function BoltIcon() {
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
      <path d="M13 2 5 14h5l-1 8 8-12h-5l1-8Z" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export default function ProductPurchasePanel({
  name,
  price,
}: ProductPurchasePanelProps) {
  const [quantity, setQuantity] = useState(1);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (!showFeedback) return;

    const timer = setTimeout(() => {
      setShowFeedback(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, [showFeedback]);

  function showMessage(message: string) {
    setFeedbackMessage(message);
    setShowFeedback(true);
  }

  return (
    <>
      <div className="rounded-[28px] border border-stone-200/80 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-6">
        <div className="border-b border-stone-100 pb-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
              Price
            </p>
            <p className="mt-2 text-3xl font-semibold leading-none text-[#0d1f14]">
              Tk {formatPrice(price)}
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
              Quantity
            </p>
            <p className="mt-1 text-sm font-medium text-stone-700">Select quantity</p>
          </div>

          <div className="inline-flex h-12 items-center rounded-full border border-stone-200 bg-white">
            <button
              type="button"
              onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              className="flex h-12 w-12 items-center justify-center text-stone-700 transition hover:text-stone-950"
              aria-label="Decrease quantity"
            >
              <MinusIcon />
            </button>

            <span className="min-w-10 text-center text-sm font-semibold text-stone-950">
              {quantity}
            </span>

            <button
              type="button"
              onClick={() => setQuantity((value) => value + 1)}
              className="flex h-12 w-12 items-center justify-center text-stone-700 transition hover:text-stone-950"
              aria-label="Increase quantity"
            >
              <PlusIcon />
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button
            type="button"
            onClick={() =>
              showMessage(`WhatsApp order setup for ${name} will be connected next.`)
            }
            className="inline-flex h-[3.25rem] w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#128c7e_0%,#25d366_100%)] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,211,102,0.25)] transition hover:brightness-105"
          >
            <WhatsappIcon />
            <span>Order by WhatsApp</span>
          </button>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => showMessage(`${name} added to cart`)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0d1f14] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(13,31,20,0.2)] transition hover:bg-stone-950"
            >
              <CartIcon />
              <span>Add to cart</span>
            </button>

            <button
              type="button"
              onClick={() =>
                showMessage(`Direct order flow for ${name} will be connected next.`)
              }
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-amber-300 bg-[linear-gradient(180deg,#fff6e8_0%,#fffdf8_100%)] px-5 text-sm font-semibold text-amber-900 transition hover:border-amber-400 hover:bg-amber-50"
            >
              <BoltIcon />
              <span>Direct order</span>
            </button>
          </div>
        </div>
      </div>

      <UiFeedback message={feedbackMessage} isVisible={showFeedback} />
    </>
  );
}
