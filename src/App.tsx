import { useEffect, useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import type { Section } from "./types/type";

export default function App() {
  const [currSection, setCurrSection] = useState<Section>("contact");

  useEffect(() => {
    // get the current section and set currSection accordignly
    // then add an event listener to the window to update the
    // current section
  }, []);

  return (
    <>
      <Header currSection={currSection} />
      <Content />
      <Footer />
    </>
  )
}
