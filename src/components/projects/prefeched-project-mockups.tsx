import { ProjectType } from "@/lib/types";
import ProjectImage from "./project-image";

type Props = {
  title: string;
  image: ProjectType["image"];
  video: ProjectType["video"];
  isInView: boolean;
};

export default function PrefechedProjectMockups({
  title,
  image,
  video,
  isInView,
}: Props) {
  return (
    <div className="hidden h-0 w-0">
      {/* Prefetch project mockup images once in view */}
      {/* Accordion content not rendered until expanded so cannot load images once they scroll into view */}

      {image && (
        <ProjectImage
          src={image}
          alt={`${title} preloaded`}
          isInView={isInView}
        />
      )}

      {video && (
        <ProjectImage
          src={video.placeholderImage}
          alt={`${title} mockup`}
          isInView={isInView}
        />
      )}
    </div>
  );
}
