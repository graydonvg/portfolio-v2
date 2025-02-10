import { cn } from "@/lib/utils";
import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

type Props = {
  number: number;
};

export default function ItemNumber({ number }: Props) {
  return (
    <span>
      <span aria-hidden className={cn("text-accent", roboto_mono.className)}>
        {String(number).padStart(2, "0")}
      </span>
      <span className="text-accent">. </span>
    </span>
  );
}
