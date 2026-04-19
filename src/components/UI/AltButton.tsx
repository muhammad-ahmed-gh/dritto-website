import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  children?: ReactNode | ReactNode[];
};

export default function AltButton(props: Props) {
  return (
    <a
      href={props.href}
      rel={props.rel}
      target={props.target}
      className={twMerge(
        "flex justify-center items-center gap-[10px] text-primary-dark rounded-[10px] w-[150px] h-[50px] capitalize transition-[background-color_transform] duration-300 border-1 border-primary-dark active:transform-[scale(0.95)] hover:transform-[translateY(-3px)]",
        props.className ?? "",
      )}
    >
      {props.children}
    </a>
  );
}
