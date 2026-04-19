import clsx from "clsx";
import Container from "./UI/Container";
import { useEffect, useState } from "react";
import HeaderLinks from "./HeaderLink";
import HeaderBurger from "./HeaderBurger";

export default function Header() {
  const [areWeDown, setAreWeDown] = useState(window.scrollY > 50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setAreWeDown(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 transition-[background-color_box-shadow] duration-300 shadow-[0_0_3px_#161c2d26] bg-[#ffffff90] backdrop-blur-[5px]",
        areWeDown
          ? "md:shadow-[0_0_3px_#161c2d26] md:bg-[#ffffff90] md:backdrop-blur-[5px]"
          : "md:shadow-none md:bg-transparent md:backdrop-blur-[0px]",
      )}
    >
      <Container className="flex justify-between items-center h-header-h">
        <h1 className="uppercase">
          <a
            href="#hero"
            className="font-bold text-[#3c4858] text-[20px] [letter-spacing:1px]"
          >
            Dritto
          </a>
        </h1>
        <div className="flex items-center">
          <HeaderBurger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <HeaderLinks isMenuOpen={isMenuOpen} />
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
