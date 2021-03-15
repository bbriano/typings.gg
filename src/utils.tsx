import { ReactNode } from "react";
import styles from "./utils.module.css";

type Alignment = "flex-start" | "center" | "flex-end";

type Props = {
  children?: ReactNode;
  align?: {
    vertical?: Alignment;
    horizontal?: Alignment;
  };
};

export function Row({
  children,
  align: { vertical = "center", horizontal = "center" } = {},
}: Props) {
  return (
    <div
      className={styles.row}
      style={{
        justifyContent: horizontal,
        alignItems: vertical,
      }}
    >
      {children}
    </div>
  );
}

export function Column({
  children,
  align: { vertical = "center", horizontal = "center" } = {},
}: Props) {
  return (
    <div
      className={styles.column}
      style={{
        justifyContent: vertical,
        alignItems: horizontal,
      }}
    >
      {children}
    </div>
  );
}
