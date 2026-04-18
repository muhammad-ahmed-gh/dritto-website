import type { Section } from "../types/type";

type HeaderLinks = {
  id: Section;
  label: string;
  href: string;
}[];

export const headerLinks: HeaderLinks = [
  {
    id: "about",
    label: "about",
    href: "#about",
  },
  {
    id: "features",
    label: "features",
    href: "#feature",
  },
  {
    id: "more",
    label: "more",
    href: "#more",
  },
  {
    id: "contact",
    label: "contact",
    href: "#contact",
  },
]