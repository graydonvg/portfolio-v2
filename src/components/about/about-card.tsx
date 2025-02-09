import Image, { StaticImageData } from "next/image";
import TypographyP from "../ui/typography/p";
import TypographyH3 from "../ui/typography/h3";
import { cn } from "@/lib/utils";

type Props = {
  number: number;
  title: string;
  parapraphs: string;
  imageSrc?: StaticImageData;
  className: string;
};

export default function AboutCard({
  number,
  title,
  parapraphs,
  imageSrc,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "h-full rounded-lg border border-border bg-card p-6 text-card-foreground",
        className,
      )}
    >
      <TypographyH3>
        <span aria-hidden className="font-mono text-accent">
          {String(number).padStart(2, "0")}.
        </span>{" "}
        {title}
      </TypographyH3>

      <div className="mt-5 sm:mt-6">
        {parapraphs.split("<br />").map((parapraph, index) => (
          <TypographyP key={index}>{parapraph}</TypographyP>
        ))}
      </div>

      {imageSrc && (
        <div className="relative mt-6 h-fit overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt="project mockup"
            placeholder="blur"
            priority
            className="rounded-lg"
            sizes="(min-width: 1540px) 425px, (min-width: 1280px) 340px, (min-width: 1040px) 254px, (min-width: 780px) 654px, (min-width: 640px) 526px, calc(100vw - 82px)"
          />
        </div>
      )}
    </div>
  );
}
