import AltButton from "./UI/AltButton";
import Container from "./UI/Container";
import MainButton from "./UI/MainButton";

export default function Hero() {
  return (
    <section className="bg-[#f8f9fc]">
      <Container className="pt-header-h min-h-screen flex flex-col justify-center gap-[100px] items-center text-center md:flex-row md:gap-[30px] md:text-start">
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
          <div className="mt-[30px] flex gap-[20px] justify-center md:justify-start">
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
        {/* <div className="right-[70px] top-1/2 w-[300px] max-w-full transform-[rotate(20deg)] shadow-[5px_1px_15px_#00000015] before:absolute before:w-[450px] before:h-[450px] before:-z-1 before:bg-[radial-gradient(at_0_0,#73db8d,#1ca03d)] before:rounded-full before:top-1/2 before:left-[45%] before:transform-[translate(-50%,-50%)] after:absolute after:top-[-70px] after:right-[-70px] after:transform-[rotate(45deg)] after:w-[70px] after:h-[70px] after:rounded-[7px] after:bg-[#33b05276] md:w-[200px] md:before:w-[300px] md:before:h-[300px] lg:w-[300px] lg lg:before:w-[450px] lg:before:h-[450px]">
          <img
            src="/screenshot1.png"
            alt="dritto screenshot"
            className="border-4 border-white rounded-[10px] bg-white overflow-hidden"
          />
        </div> */}
        <img
          src="/hero-img.png"
          alt="dritto screenshot"
          className="max-w-[100%] w-[500px] md:w-[350px] lg:w-[500px]"
        />
      </Container>
    </section>
  );
}
