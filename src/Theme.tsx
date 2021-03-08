import { createContext, useContext } from "react";
import "./App.css";

type Theme = {
  // a: number
};

const ThemeContext = createContext<Theme>({});

export const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
  return useContext(ThemeContext);
}
