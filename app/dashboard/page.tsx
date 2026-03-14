"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardContent from "@/components/dashboard/dashboard-content";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Example: Scroll to top on route enter
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full max-w-4xl mx-auto py-12 px-4 space-y-10">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
        Welcome to Teamvibe 🎉
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Your internal CRM for managing team members, roles, invitations, and employee data — all from one dashboard.
      </p>
      <DashboardContent />
    </main>
  );
}