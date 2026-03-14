"use client";

// Example structure: can be extended with real metrics and onboarding flows
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Rocket, Users, MailPlus } from "lucide-react";

export default function DashboardContent() {
  return (
    <section className="grid gap-8 md:grid-cols-2">
      {/* Quick links/feature highlights */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-primary">Quick Start</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p>
            1. <strong>Invite teammates</strong> to your Teamvibe workspace to get started.
          </p>
          <p>
            2. Assign <strong>roles</strong> (Owner, Admin, Member) for secure team structuring.
          </p>
          <p>
            3. Use the dashboard to manage employee info, invites, and permissions.
          </p>
          <Link href="/dashboard/team" className="text-primary underline font-medium">
            Go to Team Management &rarr;
          </Link>
        </CardContent>
      </Card>
      
      {/* Team stats */}
      <Card>
        <CardHeader className="flex flex-row gap-2 items-center">
          <Users className="text-primary" />
          <CardTitle className="text-xl">Your Team at a Glance</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Placeholder for team/member stats, can use real data */}
          <div className="grid grid-cols-2 gap-2 text-center">
            <div>
              <div className="text-3xl font-bold">—</div>
              <div className="text-xs">Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold">—</div>
              <div className="text-xs">Pending Invites</div>
            </div>
          </div>
          <div className="mt-4 text-xs text-muted-foreground">
            Add teammates to unlock your full CRM.
          </div>
        </CardContent>
      </Card>

      {/* Mail setup */}
      <Card>
        <CardHeader className="flex flex-row gap-2 items-center">
          <MailPlus className="text-primary" />
          <CardTitle className="text-xl">Invite by Email</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Use the Team page to invite new team members via email.<br />
            Invitations are emailed instantly (powered by SendGrid).
          </p>
          <div className="mt-2 text-xs text-muted-foreground">
            Make sure your <b>SENDGRID_API_KEY</b> and <b>SENDGRID_FROM_EMAIL</b> are set in your environment configuration.
          </div>
        </CardContent>
      </Card>

      {/* Getting started checklist */}
      <Card>
        <CardHeader>
          <Rocket className="text-primary" />
          <CardTitle className="text-xl">Getting started checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>Complete your profile and team settings</li>
            <li>Invite your first team members</li>
            <li>Test role assignment (Owner, Admin, Member)</li>
            <li>Try out dashboard navigation and settings</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}