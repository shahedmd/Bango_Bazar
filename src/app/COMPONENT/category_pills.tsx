type CategoryPillProps = {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
};

export default function CategoryPill({
  label,
  icon,
  isActive,
  onClick,
}: CategoryPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold transition ${
        isActive
          ? "bg-[#0d1f14] text-white"
          : "border border-stone-200 bg-white text-stone-700 hover:border-stone-300 hover:text-stone-950"
      }`}
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
          isActive ? "bg-white/12 text-white" : "bg-stone-100 text-[#0d1f14]"
        }`}
      >
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
}
