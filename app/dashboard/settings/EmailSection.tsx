"use client";
import { useFormState } from "react-dom";
import { updateEmailAction } from "./actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function EmailSection() {
  const [formState, formAction] = useFormState(updateEmailAction, null);

  return (
    <form action={formAction} className="space-y-6">
      <h2 className="text-xl font-semibold text-primary mb-2">Update Email</h2>
      <div>
        <Label htmlFor="email">New Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div>
        <Label htmlFor="password">Current Password</Label>
        <Input id="password" name="password" type="password" autoComplete="current-password" required />
      </div>
      <Button type="submit" className="mt-2">Update email</Button>
      {formState?.error && (
        <div className="text-red-600 text-sm">{formState.error}</div>
      )}
    </form>
  );
}