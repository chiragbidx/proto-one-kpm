"use client";
import { useFormState } from "react-dom";
import { deleteAccountAction } from "./actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function DangerZoneSection() {
  const [formState, formAction] = useFormState(deleteAccountAction, null);

  return (
    <form action={formAction} className="space-y-6 bg-red-50 border-red-200 rounded-md p-6 mt-6">
      <h2 className="text-xl font-semibold text-red-600 mb-2">Delete Account</h2>
      <div className="text-sm text-red-800 mb-2">
        This will permanently remove your Teamvibe account and all data. 
        This action cannot be undone.
      </div>
      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input id="confirmPassword" name="password" type="password" autoComplete="current-password" required />
      </div>
      <Button variant="destructive" type="submit" className="mt-2">Delete account</Button>
      {formState?.error && (
        <div className="text-red-600 text-sm">{formState.error}</div>
      )}
    </form>
  );
}