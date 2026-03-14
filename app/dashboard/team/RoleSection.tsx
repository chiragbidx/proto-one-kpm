"use client";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function RoleSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Role Management</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">
          Owners and Admins can update roles for team members and remove users from your CRM.
        </p>
        {/* Placeholder panel, wire to actions as needed */}
        <div className="text-xs text-muted-foreground">
          Role updates coming soon. Add or invite more team members to unlock advanced permissions.
        </div>
      </CardContent>
    </Card>
  );
}