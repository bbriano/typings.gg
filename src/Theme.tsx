import { noop } from "lodash";
import { createContext, useContext } from "react";
import "./App.css";

export type Theme = {
  name: string;
  colors: {
    main: {
      background: string;
      foreground: string;
    };
    card: {
      background: string;
      foreground: string;
    };
    textBox: {
      background: string;
      foreground: string;
    };
    redoButton: {
      background: string;
      foreground: string;
    };
    wordHighlights: {
      current: string;
      correct: string;
      wrong: string;
    };
  };
};

export const defaultThemes: Theme[] = [
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
];

export type ThemeContextValue = [Theme, (theme: Theme) => void];

const ThemeContext = createContext<ThemeContextValue>([defaultThemes[0], noop]);

export const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
  return useContext(ThemeContext);
}
