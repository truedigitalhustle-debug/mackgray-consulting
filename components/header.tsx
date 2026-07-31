"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
{ href: "/", label: "Home" },
{ href: "/services", label: "Services" },
{ href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);

return (
<header className="border-b border-neutral-200">
<div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
<Link href="/" className="font-serif text-lg text-neutral-900">
MackGray Consulting
</Link>

<nav className="hidden items-center gap-8 sm:flex">
{navLinks.map((link) => (
<Link
key={link.href}
href={link.href}
className="text-sm font-medium uppercase tracking-wide text-neutral-600 hover:text-neutral-900"
>
{link.label}
</Link>
))}
<Link
href="/contact"
className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
>
Continue the Conversation
</Link>
</nav>

<button
className="sm:hidden"
aria-label="Toggle menu"
aria-expanded={open}
onClick={() => setOpen(!open)}
>
<span className="block h-0.5 w-6 bg-neutral-900" />
<span className="mt-1.5 block h-0.5 w-6 bg-neutral-900" />
<span className="mt-1.5 block h-0.5 w-6 bg-neutral-900" />
</button>
</div>

{open && (
<nav className="flex flex-col gap-4 border-t border-neutral-200 px-6 py-6 sm:hidden">
{navLinks.map((link) => (
<Link
key={link.href}
href={link.href}
onClick={() => setOpen(false)}
className="text-sm font-medium uppercase tracking-wide text-neutral-600"
>
{link.label}
</Link>
))}
<Link
href="/contact"
onClick={() => setOpen(false)}
className="rounded-md bg-neutral-900 px-5 py-2.5 text-center text-sm font-medium text-white"
>
Continue the Conversation
</Link>
</nav>
)}
</header>
);
}
