import { ProjectType } from "@/lib/types";

type Props = {
  tags: ProjectType["tags"];
};

export default function ProjectTags({ tags }: Props) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_0_0_1px] md:text-sm/5"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
