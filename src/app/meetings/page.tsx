import { Metadata } from "next";
import MyMeetingsComponent from "@/components/meeting/my-meetting-components";

export const metadata: Metadata = {
  title: "My Meetings",
};

export default function Page() {
  return <MyMeetingsComponent />;
}
