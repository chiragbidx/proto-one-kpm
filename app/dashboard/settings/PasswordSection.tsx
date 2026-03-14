"use client";
import { useFormState } from "react-dom";
import { updatePasswordAction } from "./actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function PasswordSection() {
  const [formState, formAction] = useFormState(updatePasswordAction, null);

  return (
    <form action={formAction} className="space-y-6">
      <h2 className="text-xl font-semibold text-primary mb-2">Change Password</h2>
      <div>
        <Label htmlFor="currentPassword">Current Password</Label>
        <Input id="currentPassword" name="currentPassword" type="password" required />
      </div>
      <div>
        <Label htmlFor="newPassword">New Password</Label>
        <Input id="newPassword" name="newPassword" type="password" required />
      </div>
      <Button type="submit" className="mt-2">Change password</Button>
      {formState?.error && (
        <div className="text-red-600 text-sm">{formState.error}</div>
      )}
    </form>
  );
}