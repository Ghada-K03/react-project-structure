import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function AppProvider({ children }: Props) {
  return <>{children}</>;
}

export default AppProvider;
