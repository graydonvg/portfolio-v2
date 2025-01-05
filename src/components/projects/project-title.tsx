import TypographyH3 from "../ui/typography/h3";

type Props = {
  title: string;
  index: number;
};

export default function ProjectTitle({ title, index }: Props) {
  return (
    <div className="flex items-center justify-end gap-2">
      <span
        className="text-h3 font-semibold tracking-tight text-accent"
        aria-hidden
      >
        0{index + 1}.
      </span>
      <TypographyH3>{title}</TypographyH3>
    </div>
  );
}
