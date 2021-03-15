import { ReactNode, useMemo, useState } from "react";
import { GuidePage } from "./GuidePage";
import { GamePage } from "./GamePage";
import { ThemesPage } from "./ThemesPage";
import { SettingsPage } from "./SettingsPage";
import { noop } from "lodash";
import {
  defaultThemes,
  Theme,
  ThemeContextValue,
  ThemeProvider,
  useTheme,
} from "./Theme";

type Page = {
  key: string;
  content: ReactNode;
  label: string;
};

const root = { key: "game", content: <GamePage />, label: "game" };
const pages = [
  { key: "guide", content: <GuidePage />, label: "user guide" },
  { key: "themes", content: <ThemesPage />, label: "themes" },
  { key: "settings", content: <SettingsPage />, label: "settings" },
];

type ModalProps = {
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode;
};

function Modal({ open, onClose = noop, children }: ModalProps) {
  const [theme] = useTheme();
  return open ? (
    <div
      className="modal"
      style={{
        background: theme.colors.main.background,
        color: theme.colors.main.foreground,
      }}
    >
      <div className="modal-navbar">
        <button onClick={() => onClose()}>{"< back"}</button>
      </div>
      {children}
    </div>
  ) : (
    <></>
  );
}

type NavBarProps = {
  onChange?: (page: Page) => void;
  value?: Page;
};

function NavBar({ value, onChange = noop }: NavBarProps) {
  return (
    <div className="navbar">
      {pages.map((page, i) => (
        <div key={page.key}>
          {!!i && "/"}
          <button disabled={page === value} onClick={() => onChange(page)}>
            {page.label}
          </button>
        </div>
      ))}
    </div>
  );
}

function useThemeProviderValue(theme: Theme, setTheme: (theme: Theme) => void) {
  return useMemo<ThemeContextValue>(() => [theme, setTheme], [theme, setTheme]);
}

function App() {
  const [theme, setTheme] = useState<Theme>(defaultThemes[0]);
  const themeProviderValue = useThemeProviderValue(theme, setTheme);

  const [currentPage, setCurrentPage] = useState<Page>(root);
  const content = <div className="content">{currentPage.content}</div>;
  return (
    <ThemeProvider value={themeProviderValue}>
      <div
        className="wrapper"
        style={{
          background: theme.colors.main.background,
          color: theme.colors.main.foreground,
        }}
      >
        {currentPage === root ? (
          content
        ) : (
          <Modal open onClose={() => setCurrentPage(root)}>
            {content}
          </Modal>
        )}
        <NavBar value={currentPage} onChange={(page) => setCurrentPage(page)} />
      </div>
    </ThemeProvider>
  );
}

export default App;
