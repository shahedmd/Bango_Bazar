"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/" },
  { label: "Repair Parts", href: "/" },
  { label: "Accessories", href: "/" },
];

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 19c1.6-3 4.1-4.5 7-4.5S17.4 16 19 19" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9h12l-1 10H7L6 9Z" />
      <path d="M9 9a3 3 0 1 1 6 0" />
    </svg>
  );
}

function IconShell({
  children,
  label,
  onClick,
}: {
  children: ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition hover:border-stone-300 hover:text-stone-950 sm:h-11 sm:w-11"
    >
      {children}
    </button>
  );
}

export default function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/92 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-2 px-4 sm:h-20 sm:gap-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition hover:border-stone-300 hover:text-stone-950 lg:hidden sm:h-11 sm:w-11"
          >
            <MenuIcon />
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-stone-700 transition hover:text-[#0d1f14]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <Link
          href="/"
          className="min-w-0 shrink-0 px-2 text-center text-base font-semibold uppercase tracking-[0.2em] text-[#0d1f14] sm:text-xl sm:tracking-[0.28em] lg:px-4 lg:text-[1.35rem] lg:tracking-[0.32em]"
        >
          G TEL
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
          <div
            className={`flex h-10 items-center overflow-hidden rounded-full border border-stone-200 bg-white transition-all duration-300 ease-out sm:h-11 ${
              isSearchOpen
                ? "w-full max-w-[13rem] sm:max-w-[15rem] lg:max-w-[18rem]"
                : "w-10 sm:w-11"
            }`}
          >
            <button
              type="button"
              aria-label="Open search"
              onClick={() => setIsSearchOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center text-stone-700 sm:h-11 sm:w-11"
            >
              <SearchIcon />
            </button>

            <input
              type="text"
              placeholder="Search products..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className={`h-full min-w-0 flex-1 bg-transparent pr-1 text-xs text-stone-800 outline-none sm:pr-2 sm:text-sm ${
                isSearchOpen ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />

            {isSearchOpen ? (
              <button
                type="button"
                aria-label="Close search"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchText("");
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center text-stone-500 transition hover:text-stone-900 sm:h-11 sm:w-11"
              >
                <CloseIcon />
              </button>
            ) : null}
          </div>

          <div className={`${isSearchOpen ? "hidden md:flex" : "flex"} items-center gap-2`}>
            <IconShell label="Account">
              <UserIcon />
            </IconShell>

            <button
              type="button"
              aria-label="Cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition hover:border-stone-300 hover:text-stone-950 sm:h-11 sm:w-11"
            >
              <BagIcon />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#0d1f14] px-1 text-[10px] font-semibold text-white">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-stone-200 bg-white lg:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-stone-100 py-3 text-sm font-medium text-stone-700 last:border-b-0 hover:text-[#0d1f14]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
