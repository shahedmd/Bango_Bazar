import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "../../COMPONENT/product_card";
import ProductGallery from "../product-gallery";
import ProductPurchasePanel from "../product-purchase-panel";
import {
  getAllProductIds,
  getProductDetailById,
  getRelatedProducts,
} from "../product-detail-data";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-BD", {
    maximumFractionDigits: 0,
  }).format(price);
}

export async function generateStaticParams() {
  return getAllProductIds().map((id) => ({
    id: String(id),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductDetailById(Number(id));

  if (!product) {
    return {
      title: "Product not found | G TEL",
    };
  }

  return {
    title: `${product.name} | G TEL`,
    description: product.detailsDescription,
  };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = Number(id);

  if (!Number.isInteger(productId)) {
    notFound();
  }

  const product = getProductDetailById(productId);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(productId);

  return (
    <main className="bg-[linear-gradient(180deg,#f3f6f2_0%,#ffffff_18%,#fafaf9_100%)] pb-16">
      <section className="border-b border-stone-200/70 bg-white/78">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-2 px-4 py-4 text-sm text-stone-500 sm:px-6 lg:px-8">
          <Link href="/" className="transition hover:text-stone-950">
            Home
          </Link>
          <span>/</span>
          <span className="text-stone-700">Product details</span>
          <span>/</span>
          <span className="truncate text-stone-950">{product.name}</span>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.1fr)_420px] xl:items-start">
            <ProductGallery
              images={product.gallery}
              name={product.name}
              brand={product.brand}
              category={product.category}
            />

            <div className="xl:pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#0d1f14] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                  {product.brand}
                </span>
                <span className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-700">
                  {product.category}
                </span>
              </div>

              <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-stone-950 sm:text-4xl">
                {product.name}
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600 sm:text-[15px]">
                {product.shortDescription}
              </p>

              <div className="mt-6 grid gap-3 rounded-[28px] border border-stone-200/80 bg-white/90 p-5 text-sm text-stone-700 sm:grid-cols-3 sm:p-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                    Brand
                  </p>
                  <p className="mt-2 font-medium text-stone-950">{product.brand}</p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                    Category
                  </p>
                  <p className="mt-2 font-medium text-stone-950">{product.category}</p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                    Product ID
                  </p>
                  <p className="mt-2 font-medium text-stone-950">#{product.id}</p>
                </div>
              </div>

              <div className="mt-6 xl:sticky xl:top-24">
                <ProductPurchasePanel name={product.name} price={product.price} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[30px] border border-stone-200/80 bg-white p-6 shadow-[0_16px_42px_rgba(15,23,42,0.05)] sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
            Description
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div>
              <h2 className="text-3xl font-semibold text-stone-950">
                {product.name}
              </h2>
              <p className="mt-5 text-sm leading-7 text-stone-600 sm:text-[15px]">
                {product.detailsDescription}
              </p>
            </div>

            <aside className="rounded-[24px] border border-stone-200 bg-stone-50 p-5">
              <div className="space-y-4 text-sm text-stone-700">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-400">
                    Brand
                  </p>
                  <p className="mt-1 font-medium text-stone-950">{product.brand}</p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-400">
                    Category
                  </p>
                  <p className="mt-1 font-medium text-stone-950">{product.category}</p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-400">
                    Price
                  </p>
                  <p className="mt-1 font-medium text-stone-950">
                    Tk {formatPrice(product.price)}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                Related products
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-950">
                You may also like
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
