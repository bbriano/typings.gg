import { createContext, useContext } from "react";
import "./App.css";

type Theme = {
  main: {
    background: string
    foreground: string
  }

  card: {
    background: string
    foreground: string
  }

  wordHighlights: {
    current: string
    correct: string
    wrong: string
  }

  textBox: {
    background: string
    foreground: string
  }

  redoButton: {
    background: string
    foreground: string
  }
};

const ThemeContext = createContext<Theme>({});

export const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
  return useContext(ThemeContext);
}
