import { ProjectType } from "@/lib/types";
import ProjectImage from "./project-image";

type Props = {
  title: string;
  image: ProjectType["image"];
  isLive: boolean;
};

export default function ProjectMockup({ title, image, isLive }: Props) {
  return (
    <div className="relative size-full">
      <ProjectImage
        src={image}
        alt={`${title} mockup`}
        className="size-full rounded-lg"
      />

      {!isLive && (
        <div className="absolute left-0 top-0 flex size-full items-center justify-center rounded-lg bg-zinc-950/80 text-center text-2xl text-white">
          Coming soon
        </div>
      )}
    </div>
  );
}
