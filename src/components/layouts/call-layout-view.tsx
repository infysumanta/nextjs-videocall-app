import { CallLayout } from "@/@types";
import { PaginatedGridLayout, SpeakerLayout } from "@stream-io/video-react-sdk";

interface CallLayoutViewProps {
  layout: CallLayout;
}

export function CallLayoutView({ layout }: CallLayoutViewProps) {
  if (layout === "speaker-vert") {
    return <SpeakerLayout />;
  }

  if (layout === "speaker-horiz") {
    return <SpeakerLayout participantsBarPosition="right" />;
  }

  if (layout === "grid") {
    return <PaginatedGridLayout />;
  }

  return null;
}
