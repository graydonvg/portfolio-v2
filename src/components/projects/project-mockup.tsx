import { ProjectType } from "@/lib/types";
import ProjectImage from "./project-image";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  title: string;
  image: ProjectType["image"];
  video: ProjectType["video"];
  isLive: boolean;
};

export default function ProjectMockup({ title, image, video, isLive }: Props) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="relative size-full">
      {image && (
        <ProjectImage
          src={image}
          alt={`${title} mockup`}
          className="size-full rounded-lg"
        />
      )}

      {video && (
        <>
          <ProjectImage
            src={video.placeholderImage}
            alt={`${title} mockup`}
            className="size-full rounded-lg"
          />
          <video
            src={video.src}
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            className={cn("absolute left-0 top-0 hidden size-full rounded-lg", {
              block: isVideoLoaded,
            })}
            onLoadedData={() => setIsVideoLoaded(true)}
          />
        </>
      )}

      {!isLive && (
        <div className="absolute left-0 top-0 flex size-full items-center justify-center rounded-lg bg-zinc-950/80 text-center text-2xl text-white">
          Coming soon
        </div>
      )}
    </div>
  );
}
