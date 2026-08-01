import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
return (
<main className="mx-auto max-w-2xl px-6 py-20">
<h1 className="font-serif text-3xl text-neutral-900">Privacy Policy</h1>
<div className="mt-8 space-y-5 text-neutral-700">
<p>
This website does not use
tracking cookies or third-party analytics. Information submitted
through the contact form is sent directly to Mack Gray&apos;s email
address via your own email client and is not stored on any server or
database operated by this website.
</p>
<p>
If you have questions about how your information is
handled, contact Mack Gray directly using the contact page.
</p>
<p className="text-sm text-neutral-500">
Last updated: July 31, 2026. This policy may be updated from time to time. Please review this page periodically for changes.
</p>
</div>
</main>
);
}
