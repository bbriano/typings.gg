import { ReactNode, useState } from "react";
import { GuidePage } from "./GuidePage";
import { GamePage } from "./GamePage";
import { ThemesPage } from "./ThemesPage";
import { noop } from "lodash";

type Page = {
  key: string;
  content: ReactNode;
  label: string;
};

const root = { key: "game", content: <GamePage />, label: "game" };
const pages = [
  { key: "guide", content: <GuidePage />, label: "guide" },
  { key: "themes", content: <ThemesPage />, label: "themes" },
];

type ModalProps = {
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode;
};

function Modal({ open, onClose = noop, children }: ModalProps) {
  return open ? (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        background: "#fff",
      }}
    >
      <button onClick={() => onClose()}>Back</button>
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
    <div>
      {pages.map((page) => (
        <button disabled={page === value} onClick={() => onChange(page)}>
          {page.label}
        </button>
      ))}
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(pages[0]);
  return (
    <>
      {currentPage === root ? (
        <div>{currentPage.content}</div>
      ) : (
        <Modal open onClose={() => setCurrentPage(root)}>
          <div>{currentPage.content}</div>
        </Modal>
      )}
      <NavBar value={currentPage} onChange={(page) => setCurrentPage(page)} />
    </>
  );
}

export default App;
