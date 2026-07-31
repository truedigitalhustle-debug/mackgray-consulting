import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
return (
<main className="mx-auto max-w-2xl px-6 py-20">
<h1 className="font-serif text-4xl text-neutral-900">
Let&apos;s Discuss Your Business
</h1>
<p className="mt-6 text-lg leading-relaxed text-neutral-700">
You can reply directly to the email I sent you, or use the short form
below — either way reaches me personally, not a support queue. No sales
team, no auto-responders.
</p>

<div className="mt-10">
<ContactForm />
</div>

<div className="mt-12 border-t border-neutral-200 pt-8">
<p className="text-neutral-700">
Prefer email directly?{" "}
<a
href={`mailto:${siteConfig.email}`}
className="font-medium text-neutral-900 underline underline-offset-4"
>
Reply With Questions
</a>
</p>
</div>
</main>
);
}
