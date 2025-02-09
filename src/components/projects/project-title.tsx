import TypographyH3 from "../ui/typography/h3";

type Props = {
  title: string;
  index: number;
};

export default function ProjectTitle({ title, index }: Props) {
  return (
    <div className="flex items-center justify-end gap-2">
      <span
        className="font-mono text-h3 font-semibold tracking-tight text-accent"
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}.
      </span>
      <TypographyH3>{title}</TypographyH3>
    </div>
  );
}
