import SidebarNav from "@/components/dashboard/sidebar-nav";
import UserMenu from "@/components/dashboard/user-menu";
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
        <UserMenu />
      </nav>
    </div>
  );
}