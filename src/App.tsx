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
  { key: "guide", content: <GuidePage />, label: "user guide" },
  { key: "themes", content: <ThemesPage />, label: "themes" },
];

type ModalProps = {
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode;
};

function Modal({ open, onClose = noop, children }: ModalProps) {
  return open ? (
    <div className="modal">
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

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(root);
  const content = <div className="content">{currentPage.content}</div>;
  return (
    <div className="wrapper">
      {currentPage === root ? (
        content
      ) : (
        <Modal open onClose={() => setCurrentPage(root)}>
          {content}
        </Modal>
      )}
      <NavBar value={currentPage} onChange={(page) => setCurrentPage(page)} />
    </div>
  );
}

export default App;
