import { ContactProps } from "@/common/types/contact";
import Link from "next/link";

export default function ContactCard({
  title,
  href,
  icon,
  backgroundColor,
  textColor,
}: ContactProps) {
  return (
    <button className="rounded-lg border-2 border-neutral-300 p-1 duration-300 hover:scale-105 dark:border-neutral-600">
      <Link
        href={href}
        target="_blank"
        className={`flex items-center rounded-md justify-center py-3 gap-x-2 ${backgroundColor}`}
      >
        {icon}
        <p className={`text-sm text-neutral-50 ${textColor}`}>{title}</p>
      </Link>
    </button>
  );
}
