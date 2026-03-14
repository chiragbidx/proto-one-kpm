"use server";
import { db } from "@/lib/db/client";
import { teamInvitations, teamMembers, teams, users } from "@/lib/db/schema";
import { getAuthSession } from "@/lib/auth/session";
import { sendMail } from "@/lib/email/sendgrid";
import { randomBytes } from "crypto";
import { redirect } from "next/navigation";
import { z } from "zod";
import { eq } from "drizzle-orm";

// Example: Server action to invite a team member
export async function inviteMemberAction(_: any, formData: FormData) {
  const session = await getAuthSession();
  if (!session) {
    redirect("/auth#signin");
  }
  const inviteEmail = formData.get("inviteEmail") as string;
  const teamId = 1; // Replace with actual team lookup via session user

  // Generate random invite token
  const token = randomBytes(32).toString("hex");

  // Insert invitation in DB (abstracted)
  await db.insert(teamInvitations).values({
    teamId,
    email: inviteEmail,
    token,
    status: "pending",
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  // Send invite email
  await sendMail({
    to: inviteEmail,
    subject: "You've been invited to join a Teamvibe workspace",
    text: `You've been invited to join a Teamvibe workspace! Click to accept: ${process.env.BASE_URL}/invite/${token}`,
    html: `<p>You've been invited to join a <strong>Teamvibe</strong> workspace!<br/><a href="${process.env.BASE_URL}/invite/${token}">Click here to accept</a>.</p>`,
  });

  // Optionally: Notify owner/founder if desired
  await sendMail({
    to: "hi@chirag.co",
    subject: "A new invite has been sent from your Teamvibe app",
    text: `${session.email} invited ${inviteEmail} to team ${teamId}.`,
  });

  return { success: "Invite sent to " + inviteEmail };
}

// Example: Removal/revoke actions placeholders rely on similar owner reference for notifications or fallback communication.