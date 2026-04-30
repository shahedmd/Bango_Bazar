export default function ProductDetailsLoading() {
  return (
    <main className="bg-[linear-gradient(180deg,#f3f6f2_0%,#ffffff_18%,#fafaf9_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="h-5 w-44 rounded-full bg-stone-200" />

        <div className="mt-6 grid gap-8 xl:grid-cols-[minmax(0,1.1fr)_420px]">
          <div className="rounded-[28px] border border-stone-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <div className="aspect-[1/1] rounded-[24px] bg-stone-200" />
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="h-16 rounded-2xl bg-stone-200" />
              <div className="h-16 rounded-2xl bg-stone-200" />
              <div className="h-16 rounded-2xl bg-stone-200" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-6 w-28 rounded-full bg-stone-200" />
            <div className="h-12 w-4/5 rounded-2xl bg-stone-200" />
            <div className="h-20 rounded-[24px] bg-stone-200" />
            <div className="h-80 rounded-[28px] bg-stone-200" />
          </div>
        </div>
      </div>
    </main>
  );
}
