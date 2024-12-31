import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  image?: StaticImageData;
  video?: {
    placeholderImage: StaticImageData;
    src: string;
  };
  description: string;
  tags: string[];
  links: {
    website: string | null;
    repository: string;
  };
};
