import type { Metadata } from "next";
import AppBar from "./COMPONENT/appbar";
import Footer from "./COMPONENT/footer";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "G TEL E-COMMRCE",
  description: "E-COMMERCE WEBSITE. YOU CAN BUY MOBILE REPAIR TOOLS FROM ANY WHERE AT RESONABLE PRICES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-stone-950">
        <AppBar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
