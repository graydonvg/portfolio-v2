import { ProjectType } from "@/lib/types";
import ProjectImage from "./project-image";

type Props = {
  title: string;
  image: ProjectType["image"];
  isInView: boolean;
};

export default function PrefechedProjectMockups({
  title,
  image,
  isInView,
}: Props) {
  return (
    <div className="hidden h-0 w-0">
      {/* Prefetch project mockup images once in view */}
      {/* Accordion content not rendered until expanded so cannot load images once they scroll into view */}

      <ProjectImage
        src={image}
        alt={`${title} preloaded`}
        isInView={isInView}
      />
    </div>
  );
}
