import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  alt: string;
  isInView?: boolean;
  className?: string;
};

export default function ProjectImage({ src, alt, isInView, className }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      priority={isInView}
      className={className}
      sizes="(min-width: 1540px) 695px, (min-width: 1280px) 567px, (min-width: 1040px) 439px, (min-width: 780px) 654px, (min-width: 640px) 526px, calc(100vw - 82px)"
    />
  );
}
