'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const path = usePathname();

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          path === "/" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Overview
      </Link>
      <Link
        href="/projects"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          path === "/projects" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Projects
      </Link>
    </nav>
  );
}
