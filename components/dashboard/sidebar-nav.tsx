"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    href: "/dashboard",
    label: "Overview",
  },
  {
    href: "/dashboard/team",
    label: "Team",
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
  },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-4 mt-8">
      <div className="mb-4 px-4 text-xs text-muted-foreground uppercase tracking-widest">
        <span>Teamvibe Dashboard</span>
      </div>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted/60",
            pathname === link.href
              ? "bg-muted font-semibold text-primary"
              : "text-foreground/80"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}