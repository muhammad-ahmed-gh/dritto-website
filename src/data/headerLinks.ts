import type { Section } from "../types/type";

type HeaderLinks = {
  sectionId: Section;
  label: string;
  href: string;
}[];

export const headerLinks: HeaderLinks = [
  {
    sectionId: "about",
    label: "about",
    href: "#about",
  },
  {
    sectionId: "features",
    label: "features",
    href: "#feature",
  },
  {
    sectionId: "more",
    label: "more",
    href: "#more",
  },
  {
    sectionId: "contact",
    label: "contact",
    href: "#contact",
  },
];
