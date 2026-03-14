"use client";
import { useActionState } from "react";
import { inviteMemberAction } from "./actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

// Use useActionState from React 19, replacing deprecated useFormState
export default function InviteSection() {
  const [formState, formAction] = useActionState(
    async (prevState, formData) => {
      // Call the server action and return result.
      return await inviteMemberAction(prevState, formData);
    },
    null
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Invite Teammates</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="flex flex-col gap-4">
          <Input
            type="email"
            name="inviteEmail"
            placeholder="Enter email to invite"
            required
          />
          <Button type="submit" className="w-full">
            Send Invite
          </Button>
          {formState?.error && (
            <div className="text-red-600 text-sm">{formState.error}</div>
          )}
          {formState?.success && (
            <div className="text-green-600 text-sm">{formState.success}</div>
          )}
        </form>
        <div className="mt-2 text-xs text-muted-foreground">
          Teammates receive instant invites via email. Pending invites appear below.
        </div>
      </CardContent>
    </Card>
  );
}