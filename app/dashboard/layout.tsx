import SidebarNav from "@/components/dashboard/sidebar-nav";
import { UserMenu } from "@/components/dashboard/user-menu";
import { getAuthSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  if (!session) {
    redirect("/auth#signin");
  }

  // Prepare fallback initials for account popover.
  const initials =
    session?.firstName && session?.lastName
      ? `${session.firstName[0]}${session.lastName[0]}`
      : "U";

  // Provide user's full name and email for popover.
  return (
    <div className="flex w-full min-h-screen bg-gradient-to-b from-zinc-50 via-white to-[#ffe6d8] dark:from-[#120d0b] dark:via-[#16100d] dark:to-[#1f1612]">
      <aside className="w-64 flex-shrink-0 border-r border-border bg-background/85 dark:bg-card/95">
        <SidebarNav />
        <div className="absolute bottom-8 left-4 text-xs text-muted-foreground">
          Teamvibe &copy; {new Date().getFullYear()}
        </div>
      </aside>
      <main className="flex-1 flex flex-col">{children}</main>
      <nav className="fixed top-4 right-8 z-50">
        <UserMenu
          fullName={
            [session?.firstName, session?.lastName].filter(Boolean).join(" ") ||
            session?.email ||
            "User"
          }
          email={session?.email || ""}
          initials={initials}
          signOutAction={async () => {
            "use server";
            // Clear session or call dashboard sign out logic here if needed.
          }}
        />
      </nav>
    </div>
  );
}