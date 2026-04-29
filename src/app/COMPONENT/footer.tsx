import Link from "next/link";

const shopLinks = [
  { label: "Precision Tools", href: "/" },
  { label: "Repair Parts", href: "/" },
  { label: "Accessories", href: "/" },
  { label: "Best Sellers", href: "/" },
];

const companyLinks = [
  { label: "About Us", href: "/" },
  { label: "Contact", href: "/" },
  { label: "Shipping Policy", href: "/" },
  { label: "Return Policy", href: "/" },
];

const supportLinks = [
  { label: "FAQ", href: "/" },
  { label: "Order Tracking", href: "/" },
  { label: "Privacy Policy", href: "/" },
  { label: "Terms & Conditions", href: "/" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "WhatsApp", href: "https://wa.me/8801720677206" },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.6 1.6-1.6H16V4.8c-.3 0-.9-.1-1.9-.1-1.9 0-3.2 1.1-3.2 3.4V11H8.5v3h2.4v7h2.6Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M21.2 8.2a2.8 2.8 0 0 0-2-2C17.5 5.7 12 5.7 12 5.7s-5.5 0-7.2.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.3 12a29 29 0 0 0 .5 3.8 2.8 2.8 0 0 0 2 2c1.7.5 7.2.5 7.2.5s5.5 0 7.2-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-3.8 29 29 0 0 0-.5-3.8ZM10.2 15.4V8.6l5.7 3.4-5.7 3.4Z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20 12a8 8 0 0 1-11.8 7l-4.2 1.1 1.1-4A8 8 0 1 1 20 12Zm-8-6.5a6.5 6.5 0 0 0-5.6 9.8l.2.3-.7 2.3 2.4-.6.2.1A6.5 6.5 0 1 0 12 5.5Zm3.7 8.2c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.6.1-.7.7-.8.8-.3.2-.5.1a5.3 5.3 0 0 1-2.6-2.3c-.1-.2 0-.4.1-.5l.4-.5.2-.4a.5.5 0 0 0 0-.5c0-.1-.6-1.3-.8-1.7-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.4-.2.2-.9.9-.9 2.1s.9 2.4 1 2.5A9.3 9.3 0 0 0 12.1 16c2 .8 2 .5 2.4.5s1.3-.5 1.5-1 .2-.9.2-1-.2-.1-.4-.2Z" />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  if (label === "Facebook") return <FacebookIcon />;
  if (label === "Instagram") return <InstagramIcon />;
  if (label === "YouTube") return <YoutubeIcon />;
  return <WhatsappIcon />;
}

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#08150e] text-stone-100 sm:mt-20">
      <div className="border-b border-white/10">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-emerald-200/80 sm:text-xs sm:tracking-[0.3em]">
              G TEL
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:mt-4 sm:text-3xl lg:text-[2.1rem]">
              Professional tools, reliable parts, and a cleaner buying experience for mobile technicians.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-stone-300 sm:mt-5 sm:text-[15px] sm:leading-7">
              Built for workshops that need quality, speed, and trust. G TEL brings together repair tools, parts, and accessories in one focused storefront.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 sm:p-6 lg:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Join Our Updates
            </p>

            <p className="mt-3 text-sm leading-6 text-stone-300">
              Get product launches, top deals, and important workshop essentials directly in your inbox.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 flex-1 rounded-full border border-white/12 bg-white/8 px-4 text-sm text-white placeholder:text-stone-400 outline-none transition focus:border-emerald-300 sm:h-12"
              />
              <button
                type="button"
                className="h-11 rounded-full bg-white px-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#08150e] transition hover:bg-emerald-100 sm:h-12 sm:px-6"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1.15fr_0.7fr_0.7fr_0.9fr] lg:gap-12 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-white">G TEL</h3>

          <p className="mt-4 max-w-sm text-sm leading-6 text-stone-300">
            Premium mobile repair tools, parts, and accessories selected for modern servicing professionals.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 text-stone-200 transition hover:border-emerald-300 hover:bg-white hover:text-[#08150e]"
              >
                <SocialIcon label={item.label} />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Shop
          </h3>

          <ul className="mt-5 space-y-3 sm:space-y-4">
            {shopLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-stone-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Company
          </h3>

          <ul className="mt-5 space-y-3 sm:space-y-4">
            {companyLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-stone-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Contact
          </h3>

          <div className="mt-5 space-y-3 text-sm leading-6 text-stone-300">
            <p>Support: support@gtel.com</p>
            <p>Phone: +880 1720677206</p>
            <p>Address: Gulistan Shopping Complex 7th Floor.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-stone-400 sm:px-6 sm:py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 G TEL. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            {supportLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
