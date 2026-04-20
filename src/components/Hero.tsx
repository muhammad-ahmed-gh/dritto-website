import AltButton from "./UI/AltButton";
import Container from "./UI/Container";
import MainButton from "./UI/MainButton";

export default function Hero() {
  return (
    <section id="hero" className="bg-[#f8f9fc]">
      <Container className="pt-[calc(var(--spacing-header-h)+var(--spacing-section-p))] pb-section-p min-h-screen flex flex-col justify-center gap-[100px] items-center text-center md:flex-row md:gap-[30px] md:text-start">
        <div className="flex-1">
          <img
            src="/logo.png"
            alt="dritto logo"
            className="block mx-auto w-[100px] border-1 border-[#ddd] rounded-[20px]  md:mx-0"
          />
          <h2 className="mt-[20px] font-[500] text-[40px]">
            Dritto - Browser Extension
          </h2>
          <p className="mt-[10px] text-[20px] text-[#555]">
            Productivity = Work - Distraction
          </p>
          <div className="mt-[30px] flex flex-wrap gap-[20px] justify-center md:justify-start">
            <MainButton
              href="#"
              icon="fa-solid fa-bag-shopping"
              target="_blank"
              rel="noopener"
              className="gap-[10px] rounded-[10px] w-[150px] h-[50px] hover:transform-[translateY(-3px)]"
            >
              get dritto
            </MainButton>
            <AltButton href="#features">see features</AltButton>
          </div>
        </div>
        <img
          src="/hero-img.png"
          alt="dritto screenshot"
          className="max-w-[100%] w-[500px] md:w-[350px] lg:w-[500px]"
        />
      </Container>
    </section>
  );
}
