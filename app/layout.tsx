import type { Metadata } from "next";
import { Inter, Fraunces, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-signature" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mackgrayconsulting.com"),
  title: {
    default: `${siteConfig.name} — Licensed Lacad Consulting Partner`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    "MackGray Consulting is a licensed Lacad Consulting partner helping businesses discover opportunities to grow through proven marketing systems, automation, and strategic consulting.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body
      className={`${inter.variable} ${fraunces.variable} ${caveat.variable} font-sans bg-white text-neutral-900`}
      >
    <Header />
      {children}
    <Footer />
    </body>
    </html>
    );
}
