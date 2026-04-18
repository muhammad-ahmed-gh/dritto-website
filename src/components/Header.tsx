import clsx from "clsx";
import { headerLinks } from "../data/headerLinks";
import type { Section } from "../types/type";
import Container from "./UI/Container";
import { useEffect, useState } from "react";

type Props = {
  currSection: Section;
};

export default function Header(props: Props) {
  const [areWeDown, setAreWeDown] = useState(window.scrollY > 100);

  useEffect(() => {
    const handleScroll = () => setAreWeDown(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 transition-[background-color_box-shadow] duration-300",
        areWeDown
          ? "shadow-[0_0_3px_#161c2d26] bg-[#ffffff90] backdrop-blur-[5px]"
          : "",
      )}
    >
      <Container className="flex justify-between items-center h-header-h">
        <h1 className="uppercase">
          <a href="#hero" className="font-bold text-[#3c4858]">
            Dritto
          </a>
        </h1>
        <div className="flex items-center">
          <ul className="flex">
            {headerLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={clsx(
                    "uppercase p-[25px_10px]",
                    link.id === props.currSection
                      ? "text-primary-dark"
                      : "text-[#3c4858]",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            target="_blank"
            rel="noopener"
            href="#"
            className="flex justify-center items-center gap-[7px] ml-[8px] bg-primary-dark text-white rounded-[7px] w-[130px] h-[40px] capitalize transition-[background-color_transform] duration-300 hover:bg-primary-darkest active:transform-[scale(0.95)]"
          >
            <i className="fa-solid fa-bag-shopping"></i>
            get dritto
          </a>
        </div>
      </Container>
    </header>
  );
}
