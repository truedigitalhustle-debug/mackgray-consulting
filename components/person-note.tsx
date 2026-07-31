import Image from "next/image";
import { siteConfig } from "@/lib/site";

type PersonNoteProps = {
variant?: "full" | "condensed";
};

export function PersonNote({ variant = "full" }: PersonNoteProps) {
if (variant === "condensed") {
return (
<div className="flex items-center gap-3">
<Image
src={siteConfig.photo}
alt={`Photo of ${siteConfig.signatureName}`}
width={48}
height={48}
className="rounded-full object-cover"
priority
/>
<span className="text-sm font-medium text-neutral-700">
{siteConfig.signatureName} · {siteConfig.role}
</span>
</div>
);
}

return (
<div className="flex items-center gap-4">
<Image
src={siteConfig.photo}
alt={`Photo of ${siteConfig.signatureName}`}
width={96}
height={96}
className="rounded-full object-cover"
/>
<div>
<p className="font-signature text-2xl leading-none text-neutral-900">
{siteConfig.signatureName}
</p>
<p className="text-sm text-neutral-500">{siteConfig.role}</p>
</div>
</div>
);
}
