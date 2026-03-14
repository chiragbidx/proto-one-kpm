"use client";
import { useFormState } from "react-dom";
import { updateProfileAction } from "./actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";

export default function ProfileSection() {
  const [formState, formAction] = useFormState(updateProfileAction, null);

  return (
    <form action={formAction} className="space-y-6">
      <h2 className="text-xl font-semibold text-primary mb-2">Your Profile</h2>
      <div>
        <Label htmlFor="firstName">First Name</Label>
        <Input id="firstName" name="firstName" type="text" required />
      </div>
      <div>
        <Label htmlFor="lastName">Last Name</Label>
        <Input id="lastName" name="lastName" type="text" required />
      </div>
      <Button type="submit" className="mt-2">Save profile</Button>
      {formState?.error && (
        <div className="text-red-600 text-sm">{formState.error}</div>
      )}
    </form>
  );
}