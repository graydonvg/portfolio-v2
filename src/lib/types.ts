import { StaticImageData } from "next/image";

export type NavLinks = {
  label: string;
  internalLink?: string;
  externalLink?: string;
  icon?: string;
};

export type AboutContent = {
  title: string;
  parapraphs: string;
  imageSrc?: StaticImageData;
};

export type ProjectType = {
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

export type Technologies = {
  name: string;
  icon: string;
  ariaLabel: string;
};
