import Link from "next/link";

export const LayoutFooterSection = () => {
  return (
    <footer className="w-full py-12 px-6 flex flex-col items-center justify-center border-t border-border bg-background/85 dark:bg-card/95">
      <div className="text-center text-muted-foreground mb-4 text-sm">
        &copy; {new Date().getFullYear()} Teamvibe &mdash; Crafted for startup teams.
      </div>
      <div className="flex gap-4 text-xs text-muted-foreground">
        <span>
          Founder:{" "}
          <Link
            href="mailto:hi@chirag.co"
            className="text-primary underline hover:no-underline"
          >
            Chirag Dodiya
          </Link>
        </span>
        <span>
          Contact:{" "}
          <Link
            href="mailto:hi@chirag.co"
            className="text-primary underline hover:no-underline"
          >
            hi@chirag.co
          </Link>
        </span>
      </div>
    </footer>
  );
};