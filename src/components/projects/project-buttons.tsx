import Link from "next/link";
import { Button } from "../ui/button";
import { ProjectType } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  links: ProjectType["links"];
};

export default function ProjectButtons({ title, links }: Props) {
  return (
    <div className="flex flex-wrap gap-6 pt-12">
      <Link
        tabIndex={-1}
        href={links.repository}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1"
      >
        <Button
          variant="secondary"
          aria-label={`open ${title} repository in a new tab`}
          className="w-full"
          reduceScaleOnHover={links.website === null}
        >
          Repository
        </Button>
      </Link>
      {links.website !== null && (
        <Link
          tabIndex={-1}
          href={links.website}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (links.website?.length === 0) {
              e.preventDefault();
            }
          }}
          className={cn("flex-1", {
            "cursor-not-allowed": links.website === "",
          })}
        >
          <Button
            className="w-full"
            aria-label={`open ${title} website in a new tab`}
            disabled={links.website === ""}
          >
            View website
          </Button>
        </Link>
      )}
    </div>
  );
}
