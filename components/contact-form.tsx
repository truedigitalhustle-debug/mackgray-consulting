"use client";

import { useState, type FormEvent } from "react";
  import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
const [company, setCompany] = useState("");
const [message, setMessage] = useState("");

function handleSubmit(e: FormEvent<HTMLFormElement>) {
e.preventDefault();
const subject = encodeURIComponent(`Following up — ${name || "quick question"}`);
const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\n\n${message}`);
window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

return (
<form onSubmit={handleSubmit} className="space-y-6">
<div>
<label htmlFor="name" className="block text-sm font-medium text-neutral-700">Your name</label>
<input
id="name"
type="text"
required
value={name}
onChange={(e) => setName(e.target.value)}
className="mt-1 w-full rounded-md border border-neutral-300 px-4 py-2.5 text-neutral-900 focus:border-neutral-500 focus:outline-none"
/>
</div>
<div>
<label htmlFor="company" className="block text-sm font-medium text-neutral-700">Business name</label>
<input
id="company"
type="text"
value={company}
onChange={(e) => setCompany(e.target.value)}
className="mt-1 w-full rounded-md border border-neutral-300 px-4 py-2.5 text-neutral-900 focus:border-neutral-500 focus:outline-none"
/>
</div>
<div>
<label htmlFor="message" className="block text-sm font-medium text-neutral-700">What would you like to ask or discuss?</label>
<textarea
id="message"
required
rows={5}
value={message}
onChange={(e) => setMessage(e.target.value)}
className="mt-1 w-full rounded-md border border-neutral-300 px-4 py-2.5 text-neutral-900 focus:border-neutral-500 focus:outline-none"
/>
</div>
<button
type="submit"
className="rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
>
Continue the Conversation
</button>
<p className="text-sm text-neutral-500">
This opens directly in your email app, addressed to me personally — no contact-form black hole.
</p>
</form>
);
}
