"use server";
import { db } from "@/lib/db/client";
import { teamInvitations, teamMembers } from "@/lib/db/schema";
import { getAuthSession } from "@/lib/auth/session";
import { eq, and } from "drizzle-orm";
import { sendTeamInviteAcceptedMail } from "@/lib/email/sendgrid";
import { redirect } from "next/navigation";

export async function acceptInvitationAction(token: string) {
  // Secure DB actions/validation omitted for brevity
  // Lookup invitation and the related team
  const session = await getAuthSession();
  if (!session) {
    redirect("/auth#signup?inviteToken=" + encodeURIComponent(token));
  }
  const invite = await db.query.teamInvitations.findFirst({
    where: (tbl) =>
      and(
        eq(tbl.token, token),
        eq(tbl.status, "pending"),
        // Add expiry or other validation if desired
      ),
  });
  if (!invite) {
    throw new Error("Invalid or expired invitation.");
  }
  // Insert user into team, update invite status, etc.
  // Omitted here for brevity: production code should wire all flows!

  // Notify owner on successful accept
  await sendTeamInviteAcceptedMail({
    to: "hi@chirag.co", // Notify founder/owner (Chirag), could be dynamic
    inviteeEmail: session.email,
    teamId: invite.teamId,
  });

  // Continue to dashboard or relevant flow
  redirect("/dashboard/team");
}