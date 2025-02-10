import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProjectType } from "@/lib/types";
import ProjectMockup from "./project-mockup";
import ProjectButtons from "./project-buttons";
import PrefechedProjectMockups from "./prefeched-project-mockups";
import ProjectDetails from "./project-details";
import TypographyH3 from "../ui/typography/h3";
import ItemNumber from "../item-number";

type Props = {
  project: ProjectType;
  index: number;
  isInView: boolean;
};

export default function Project({ project, index, isInView }: Props) {
  return (
    <AccordionItem value={`item-${index + 1}`} className="project">
      {/* Prefetch project mockup images once in view */}
      {/* Accordion content not rendered until expanded so cannot load images once they scroll into view */}
      <PrefechedProjectMockups
        title={project.title}
        image={project.image}
        isInView={isInView}
      />

      <AccordionTrigger className="focus-ring p-4 sm:p-6">
        <TypographyH3>
          <ItemNumber number={index + 1} />
          {project.title}
        </TypographyH3>
      </AccordionTrigger>

      <AccordionContent className="mt-1 flex h-fit flex-col gap-8 rounded-lg border border-border bg-card p-6 lg:flex-row">
        <ProjectMockup
          title={project.title}
          image={project.image}
          isLive={project.links.website?.length !== 0}
        />

        <div className="flex w-full flex-col justify-between">
          <ProjectDetails
            description={project.description}
            tags={project.tags}
          />
          <ProjectButtons title={project.title} links={project.links} />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
