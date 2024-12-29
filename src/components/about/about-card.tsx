import Image, { StaticImageData } from "next/image";
import TypographyP from "../ui/typography/p";
import TypographyH3 from "../ui/typography/h3";

type Props = {
  number: number;
  title: string;
  parapraphs: string;
  imageSrc?: StaticImageData;
};

export default function AboutCard({
  number,
  title,
  parapraphs,
  imageSrc,
}: Props) {
  return (
    <div className="about-card h-full rounded-lg border border-border bg-card p-6 text-card-foreground">
      <TypographyH3>
        <span className="text-accent">{number}.</span> {title}
      </TypographyH3>

      {parapraphs.split("<br />").map((parapraph, index) => (
        <TypographyP key={index}>{parapraph}</TypographyP>
      ))}

      {imageSrc && (
        <div className="relative mt-4 h-fit overflow-hidden rounded-lg sm:mt-6">
          <Image
            src={imageSrc}
            alt="project mockup"
            placeholder="blur"
            className="rounded-lg"
            sizes="(min-width: 1540px) 420px, (min-width: 1280px) 334px, (min-width: 1040px) 249px, (min-width: 780px) 654px, (min-width: 640px) 526px, calc(100vw - 82px)"
          />
        </div>
      )}
    </div>
  );
}
