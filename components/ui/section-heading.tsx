import Link from "next/link";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  viewMoreLink?: string;
  viewMoreText?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  viewMoreLink,
  viewMoreText = "View More",
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
        centered && "text-center sm:flex-col sm:items-center",
        className
      )}
    >
      <div>
        <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary">{title}</h2>
        {subtitle && (
          <p className="mt-2 font-display text-xl font-light text-primary md:text-2xl">{subtitle}</p>
        )}
      </div>
      {viewMoreLink && (
        <Link
          href={viewMoreLink}
          className="font-heading text-xs uppercase tracking-wider text-accent transition-colors hover:text-primary"
        >
          {viewMoreText} →
        </Link>
      )}
    </div>
  );
}
