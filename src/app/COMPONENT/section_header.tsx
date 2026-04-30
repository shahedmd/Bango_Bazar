type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-stone-950 sm:text-3xl">
          {title}
        </h2>
      </div>

      <p className="max-w-xl text-sm leading-6 text-stone-600 sm:leading-7">
        {description}
      </p>
    </div>
  );
}