import { siteConfig } from "@/lib/site";

export function LacadLink() {
  if (!siteConfig.lacadUrl) {
return <span className="font-medium text-neutral-900">Lacad Consulting</span>;
  }
return (
  <a
  href={siteConfig.lacadUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="font-medium text-neutral-900 underline underline-offset-4"
  >
  Lacad Consulting
<span aria-hidden="true" className="ml-0.5 text-sm text-neutral-500">↗</span>
  <span className="sr-only"> (opens in a new tab)</span>
  </a>
  );
}
