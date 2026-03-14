"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TeamOverviewSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary text-xl">Your Team Workspace</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Welcome to your Teamvibe workspace! Add team members below, assign roles,
          and manage all internal communication and workflow from a single source of truth.
        </p>
      </CardContent>
    </Card>
  );
}