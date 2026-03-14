"use client";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

// Placeholder list - should be connected to server-wired team data
const demoMembers = [
  { name: "Chirag Dodiya", role: "Owner", email: "hi@chirag.co" },
  { name: "Example Teammate", role: "Member", email: "teammate@example.com" },
];

export default function MembersSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Team Members</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="divide-y">
          {demoMembers.map((member) => (
            <li key={member.email} className="flex items-center py-2 justify-between">
              <span>
                <span className="font-medium">{member.name}</span>
                <span className="mx-2 text-xs text-muted-foreground">({member.role})</span>
              </span>
              <span className="text-xs text-muted-foreground">{member.email}</span>
            </li>
          ))}
        </ul>
        <div className="mt-2 text-xs text-muted-foreground">
          To update team or roles, use Role Management below.
        </div>
      </CardContent>
    </Card>
  );
}