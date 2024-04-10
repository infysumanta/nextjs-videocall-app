import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import MeetingLoginPage from "../../../components/meeting/meeting-login-page";
import MeetingPage from "../../../components/meeting/meeting-page";

interface PageProps {
  params: { id: string };
  searchParams: { guest: string };
}

export function generateMetadata({ params: { id } }: PageProps): Metadata {
  return {
    title: `Meeting ${id}`,
  };
}

export default async function MeetingJoinPage({
  params: { id },
  searchParams: { guest },
}: PageProps) {
  const user = await currentUser();

  const guestMode = guest === "true";

  if (!user && !guestMode) {
    return <MeetingLoginPage />;
  }

  return <MeetingPage id={id} />;
}
