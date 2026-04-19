import AltButton from "./UI/AltButton";
import Container from "./UI/Container";
import MainButton from "./UI/MainButton";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#f8f9fc]">
      <Container className="pt-[calc(var(--spacing-header-h)+150px)]">
        <img
          src="/logo.png"
          alt="dritto logo"
          className="w-[100px] border-1 border-[#ddd] rounded-[20px]"
        />
        <h2 className="mt-[20px] font-[500] text-[40px]">
          Dritto - Browser Extension
        </h2>
        <p className="mt-[10px] text-[20px] text-[#555]">
          Productivity = Work - Distraction
        </p>
        <div className="mt-[30px] flex gap-[20px]">
          <MainButton
            href="#"
            icon="fa-solid fa-bag-shopping"
            className="gap-[10px] rounded-[10px] w-[150px] h-[50px] hover:transform-[translateY(-3px)]"
          >
            get dritto
          </MainButton>
          <AltButton href="#features">see features</AltButton>
        </div>
      </Container>
    </section>
  );
}
