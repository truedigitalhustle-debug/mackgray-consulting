import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Services" };

const areas = [
{
title: "Social Media Marketing Systems",
description:
"Consistent content, posting, and audience-growth systems built and managed through the Lacad Consulting fulfillment team.",
},
{
title: "Marketing Strategy & Positioning",
description:
"A clear plan for how your business is presented and marketed, tailored to your industry and goals.",
},
{
title: "Growth & Automation Support",
description:
"Systems that handle the repetitive parts of marketing and follow-up, so less falls through the cracks.",
},
];

export default function ServicesPage() {
return (
<main className="mx-auto max-w-2xl px-6 py-20">
<h1 className="font-serif text-4xl text-neutral-900">
What&apos;s Available Through the Partnership
</h1>
<p className="mt-6 text-lg leading-relaxed text-neutral-700">
I want to be upfront about how this works: I don&apos;t personally
deliver these services. As a licensed Lacad Consulting partner, my role
is figuring out whether your business is a good fit — the work itself
is scoped and delivered by the Lacad Consulting team once we&apos;ve had
that conversation.
</p>

<div className="mt-12 space-y-10">
{areas.map((area) => (
<div key={area.title} className="border-t border-neutral-200 pt-6">
<h2 className="font-serif text-xl text-neutral-900">{area.title}</h2>
<p className="mt-2 text-neutral-700">{area.description}</p>
</div>
))}
</div>

<p className="mt-12 text-neutral-700">
Every business is different, and I&apos;m not going to guess at which
of these actually fits yours from here — that&apos;s exactly what the
first conversation is for.
</p>

<div className="mt-8">
<Link
href="/contact"
className="inline-block rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
>
Explore Whether We&apos;re a Good Fit
</Link>
</div>
</main>
);
}
