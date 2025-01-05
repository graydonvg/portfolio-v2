import { ProjectType } from "@/lib/types";
import TypographyP from "../ui/typography/p";
import ProjectTags from "./project-tags";

type Props = {
  description: string;
  tags: ProjectType["tags"];
};

export default function ProjectDetails({ description, tags }: Props) {
  return (
    <div className="space-y-6">
      <TypographyP>{description}</TypographyP>
      <ProjectTags tags={tags} />
    </div>
  );
}
