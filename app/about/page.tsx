import type { Metadata } from "next";
import { PersonNote } from "@/components/person-note";
import { LacadLink } from "@/components/lacad-link";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
return (
<main className="mx-auto max-w-2xl px-6 py-20">
<PersonNote variant="full" />

<div className="mt-10 space-y-5 text-lg leading-relaxed text-neutral-700">
<h1 className="font-serif text-3xl text-neutral-900">
A bit more about what I actually do
</h1>
<p>
I&apos;m a licensed partner with <LacadLink />. In plain terms: my job
is business development, not fulfillment. I spend my time researching
businesses, reviewing how they currently market themselves, and
reaching out when I think there&apos;s a real opportunity worth
discussing.
</p>
<p>
I reach out personally instead of Lacad Consulting contacting you
directly because that&apos;s the actual structure of the partnership —
a real person doing the research and having an honest first
conversation, rather than a mass campaign from a larger company.
</p>
<p>
I&apos;m not going to tell you I&apos;ve personally run hundreds of
campaigns or built a big agency — that&apos;s not my role here, and
I&apos;d rather be straightforward about that than dress it up. What I
do bring is the first conversation: understanding your business, being
honest about whether the partnership&apos;s services are a fit, and
making the introduction if they are.
</p>
<p>
The actual marketing systems, strategy, and execution are delivered
through the Lacad Consulting partnership. I stay involved as your
point of contact throughout.
</p>
<p>
If any of that sounds useful to your business, reply to the email I
sent you — that&apos;s genuinely the fastest way to reach me.
</p>
</div>
</main>
);
}
