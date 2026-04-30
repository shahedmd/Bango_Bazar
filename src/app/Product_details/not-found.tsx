import Link from "next/link";

export default function ProductDetailsNotFound() {
  return (
    <main className="bg-[linear-gradient(180deg,#f3f6f2_0%,#ffffff_45%,#fafaf9_100%)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[28px] border border-stone-200/80 bg-white p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
          Product details
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-stone-950">
          This product could not be found.
        </h1>
        <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
          The link may be old, or the product record is not ready yet. You can head back to the catalog and open another item.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#0d1f14] px-6 text-sm font-semibold text-white transition hover:bg-stone-950"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
