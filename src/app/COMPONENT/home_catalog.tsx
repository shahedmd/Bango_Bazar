"use client";

import { useMemo, useState } from "react";
import CategoryPill from "./category_pills";
import ProductCard from "./product_card";
import SectionHeader from "./section_header";
import { products } from "./data/product";

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

export default function HomeCatalog() {
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
        <SectionHeader
          eyebrow="Categories"
          title="Shop by category"
          description="Choose a category first, then browse only the related products. This keeps the homepage cleaner and the future database structure easier to maintain."
        />

        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max items-center gap-3">
            {categories.map((category) => (
              <CategoryPill
                key={category}
                label={category}
                icon={getCategoryIcon(category)}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <SectionHeader
            eyebrow="Products"
            title={activeCategory}
            description={`Showing products from the ${activeCategory} category.`}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
