"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { products } from "../data/product";

function PrecisionIcon() {
  return <span className="text-base">PT</span>;
}

function OpeningIcon() {
  return <span className="text-base">OP</span>;
}

function SolderingIcon() {
  return <span className="text-base">SD</span>;
}

function MicroscopeIcon() {
  return <span className="text-base">MC</span>;
}

function ChemicalIcon() {
  return <span className="text-base">RC</span>;
}

function getCategoryIcon(category: string) {
  if (category === "Precision Tools") return <PrecisionIcon />;
  if (category === "Opening Tools") return <OpeningIcon />;
  if (category === "Soldering") return <SolderingIcon />;
  if (category === "Microscope") return <MicroscopeIcon />;
  return <ChemicalIcon />;
}

export default function CategoryTabs() {
  const categories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))),
    []
  );

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredProducts = useMemo(
    () => products.filter((product) => product.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
              Categories
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-stone-950 sm:text-3xl">
              Shop by category
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-stone-600 sm:leading-7">
            WE OFFER BEST SERVICE & QULITY PRODUCTS TO OUR CUSTOMER.
          </p>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max items-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-[#0d1f14] text-white"
                    : "border border-stone-200 bg-white text-stone-700 hover:border-stone-300 hover:text-stone-950"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                    activeCategory === category
                      ? "bg-white/12 text-white"
                      : "bg-stone-100 text-[#0d1f14]"
                  }`}
                >
                  {getCategoryIcon(category)}
                </span>
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-[28px] border border-stone-200 bg-stone-50 p-5 sm:p-6 lg:p-8">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
              Active Category
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-stone-950">
              {activeCategory}
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-[24px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="relative h-48 sm:h-52">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
                    {product.brand}
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-stone-950">
                    {product.name}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {product.shortDescription}
                  </p>

                  <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-base font-semibold text-[#0d1f14]">
                      Tk {product.price}
                    </p>

                    <button
                      type="button"
                      className="rounded-full bg-stone-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#0d1f14]"
                    >
                      View Product
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
