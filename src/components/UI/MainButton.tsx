import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  href: string;
  icon: string;
  className?: string;
  target?: string;
  rel?: string;
  children?: ReactNode | ReactNode[];
};

export default function MainButton(props: Props) {
  return (
    <a
      href={props.href}
      rel={props.rel}
      target={props.target}
      className={twMerge(
        "flex justify-center items-center gap-[7px] ml-[8px] bg-primary-dark text-white rounded-[7px] w-[130px] h-[40px] capitalize transition-[background-color_transform] duration-300 hover:bg-primary-darkest active:transform-[scale(0.95)]",
        props.className ?? "",
      )}
    >
      <i className={`${props.icon} text-white`}></i>
      {props.children}
    </a>
  );
}
