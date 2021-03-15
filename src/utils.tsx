import { ReactNode } from "react";

export function Row({ children }: { children: ReactNode }) {
  return (
    <div>
      { children }
    </div>
  )
}
