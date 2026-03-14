"use server";
/* global process */
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendMail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}) {
  await sgMail.send({
    to: to || "hi@chirag.co",
    from: process.env.SENDGRID_FROM_EMAIL || "hi@chirag.co",
    subject,
    text,
    html,
  });
}

// Example: Dedicated team invite email
export async function sendTeamInviteAcceptedMail({
  to,
  inviteeEmail,
  teamId,
}: {
  to: string;
  inviteeEmail: string;
  teamId: string;
}) {
  return sendMail({
    to: to || "hi@chirag.co",
    subject: "Teamvibe: A new member just joined your team",
    text: `Hi! ${inviteeEmail} joined your team (teamId: ${teamId}).`,
    html: `<p><strong>${inviteeEmail}</strong> just joined your team! (teamId: <code>${teamId}</code>)</p>`,
  });
}