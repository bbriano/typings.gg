import { createContext, useContext } from "react";
import "./App.css";

type Theme = {
  name: string
  colors: {
    main: {
      background: string
      foreground: string
    }
    card: {
      background: string
      foreground: string
    }
    textBox: {
      background: string
      foreground: string
    }
    redoButton: {
      background: string
      foreground: string
    }
    wordHighlights: {
      current: string
      correct: string
      wrong: string
    }
  }
};

const defaultThemes: Array<Theme> = [
  {
    name: "light",
    colors: {
      main: {
        background: "#fafafa",
        foreground: "#1a1a1a",
      },
      card: {
        background: "#fafafa",
        foreground: "#1a1a1a",
      },
      textBox: {
        background: "#fafafa",
        foreground: "#1a1a1a",
      },
      redoButton: {
        background: "#fafafa",
        foreground: "#1a1a1a",
      },
      wordHighlights: {
        current: "#a56de2",
        correct: "#68b723",
        wrong: "#c6262e",
      },
    },
  },
]

const ThemeContext = createContext<Theme>(
  defaultThemes[0],
);

export const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
  return useContext(ThemeContext);
}
