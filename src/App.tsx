import { useEffect, useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import type { Section } from "./types/type";
import { CurrSectionContext } from "./context/CurrSection";


export default function App() {
  const [currSection, /*setCurrSection*/] = useState<Section>("hero");

  useEffect(() => {
    // get the current section and set currSection accordignly
    // then add an event listener to the window to update the
    // current section
  }, []);

  return (
    <CurrSectionContext.Provider value={currSection}>
      <Header />
      <Content />
      <Footer />
    </CurrSectionContext.Provider>
  )
}
