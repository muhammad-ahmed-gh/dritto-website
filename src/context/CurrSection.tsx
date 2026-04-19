import { createContext } from "react";
import type { Section } from "../types/type";

export const CurrSectionContext = createContext<Section>("hero");
