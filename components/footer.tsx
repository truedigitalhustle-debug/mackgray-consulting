import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
return (
<footer className="border-t border-neutral-200">
<div className="mx-auto max-w-5xl px-6 py-12">
<p className="font-serif text-lg text-neutral-900">{siteConfig.name}</p>
<p className="mt-2 text-sm text-neutral-500">Licensed Lacad Consulting Partner</p>

<div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-600">
<Link href="/" className="hover:text-neutral-900">Home</Link>
<Link href="/services" className="hover:text-neutral-900">Services</Link>
<Link href="/about" className="hover:text-neutral-900">About</Link>
<Link href="/contact" className="hover:text-neutral-900">Reply With Questions</Link>
<Link href="/privacy" className="hover:text-neutral-900">Privacy</Link>
<Link href="/terms" className="hover:text-neutral-900">Terms</Link>
</div>

<p className="mt-8 text-xs text-neutral-400">
© {new Date().getFullYear()} {siteConfig.name}. Services delivered through the Lacad Consulting partnership.
</p>
</div>
</footer>
);
}
