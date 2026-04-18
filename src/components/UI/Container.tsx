import type { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode | ReactNode[];
};

export default function Container({ children, className }: Props) {
  return <div className={`container ${className ?? ""}`}>{children}</div>;
}
