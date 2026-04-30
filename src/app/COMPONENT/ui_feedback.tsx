"use client";

type UiFeedbackProps = {
  message: string;
  isVisible: boolean;
};

export default function UiFeedback({
  message,
  isVisible,
}: UiFeedbackProps) {
  return (
    <div
      className={`pointer-events-none fixed bottom-5 right-5 z-[100] transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-3 opacity-0"
      }`}
    >
      <div className="rounded-2xl bg-[#0d1f14] px-4 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
        {message}
      </div>
    </div>
  );
}
