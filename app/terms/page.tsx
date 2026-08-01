import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
return (
<main className="mx-auto max-w-2xl px-6 py-20">
<h1 className="font-serif text-3xl text-neutral-900">Terms of Service</h1>
<div className="mt-8 space-y-5 text-neutral-700">
<p>
This website is operated by
Mack Gray, a licensed partner of Lacad Consulting. Content on this
site is provided for informational purposes and does not constitute
a binding offer of services.
</p>
<p>
Services referenced on this site are provided through
the Lacad Consulting partnership and are subject to separate
agreements between the client and Lacad Consulting.
</p>
<p className="text-sm text-neutral-500">
Last updated: July 31, 2026. This is a template starting point,
not legal advice — have it reviewed by a qualified professional
before publishing.
</p>
</div>
</main>
);
}
