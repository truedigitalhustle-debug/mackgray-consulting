import Link from "next/link";
import { PersonNote } from "@/components/person-note";
import { LacadLink } from "@/components/lacad-link";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
return (
<main>
<section className="mx-auto max-w-2xl px-6 pt-16 pb-16 sm:pt-20">
<div className="mb-6">
<PersonNote variant="condensed" />
</div>

<p className="mb-4 text-sm font-medium uppercase tracking-wide text-brass-700">
Following up on my email
</p>
<h1 className="font-serif text-4xl leading-tight text-neutral-900 sm:text-5xl">
Hi, I&apos;m Mack.
</h1>

<div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-700">
<p>
You&apos;re here because I emailed you directly — not because you found
this site searching around. I looked at your business before reaching
out, and something about it made me think a short conversation could
be worth your time. This page is just a continuation of that note.
</p>
<p>
To be straightforward about who I am: I work as a licensed partner
with <LacadLink />, a marketing and growth firm. My part is the first
half — finding businesses I genuinely think could benefit, and having
a real conversation before anyone is brought further into the
process. If it looks like a fit, the actual strategy and execution is
handled through that partnership, not by me alone.
</p>
<p>
I reach out personally, rather than Lacad Consulting contacting you
directly, because that&apos;s the actual structure of the partnership:
a real person doing the research and having an honest first
conversation before anyone&apos;s handed off to a larger team.
</p>
<p>
No pitch on this page. Just wanted you to be able to put a face to
the name before deciding whether to reply.
</p>
</div>

<div className="mt-10 border-t border-neutral-200 pt-8">
<PersonNote variant="full" />
</div>

<div className="mt-10 flex flex-wrap gap-4">
<a
href={`mailto:${siteConfig.email}`}
className="rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
>
Reply to my email
</a>
<Link
href="/contact"
className="rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition hover:border-neutral-400"
>
Or find 15 minutes to talk
</Link>
</div>
</section>

<section className="border-t border-neutral-200 bg-neutral-50">
<div className="mx-auto max-w-2xl px-6 py-16">
<h2 className="font-serif text-2xl text-neutral-900">
If you reply, here&apos;s honestly what happens
</h2>
<ol className="mt-6 space-y-4 text-lg leading-relaxed text-neutral-700">
<li>
<span className="font-medium text-neutral-900">1.</span> We talk — usually fifteen minutes, no slide deck, just figuring out if this makes sense for your business.
</li>
<li>
<span className="font-medium text-neutral-900">2.</span> If it does, I introduce you into the Lacad Consulting process, where the actual work gets scoped.
</li>
<li>
<span className="font-medium text-neutral-900">3.</span> If it doesn&apos;t, that&apos;s fine too — no pressure, no follow-up spam.
</li>
</ol>
</div>
</section>

<section className="mx-auto max-w-2xl px-6 py-16 text-center">
<p className="text-lg text-neutral-700">
I appreciate you taking the time to learn more about what I do. If you
think I can help, I&apos;d welcome the opportunity to continue the
conversation.
</p>
<div className="mt-6">
<a
href={`mailto:${siteConfig.email}`}
className="rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
>
Reply and let&apos;s talk
</a>
</div>
</section>
</main>
);
}
