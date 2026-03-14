import { Suspense } from "react";
import ProfileSection from "./ProfileSection";
import EmailSection from "./EmailSection";
import PasswordSection from "./PasswordSection";
import DangerZoneSection from "./DangerZoneSection";

export default function DashboardSettingsPage() {
  return (
    <main className="w-full max-w-2xl mx-auto py-12 px-4 space-y-10">
      <h1 className="text-3xl font-bold mb-8 text-primary">Account Settings</h1>
      <section className="space-y-8">
        <Suspense>
          <ProfileSection />
          <EmailSection />
          <PasswordSection />
          <DangerZoneSection />
        </Suspense>
      </section>
    </main>
  );
}