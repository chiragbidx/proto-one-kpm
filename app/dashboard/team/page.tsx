import { Suspense } from "react";
import TeamOverviewSection from "./TeamOverviewSection";
import InviteSection from "./InviteSection";
import MembersSection from "./MembersSection";
import RoleSection from "./RoleSection";

export default function DashboardTeamPage() {
  return (
    <main className="w-full max-w-3xl mx-auto py-12 px-4 space-y-10">
      <h1 className="text-3xl font-bold mb-8 text-primary">Team Management</h1>
      <section className="space-y-8">
        <Suspense>
          <TeamOverviewSection />
          <InviteSection />
          <MembersSection />
          <RoleSection />
        </Suspense>
      </section>
    </main>
  );
}