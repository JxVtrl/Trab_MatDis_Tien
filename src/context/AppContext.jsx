import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [helpDrawer, setHelpDrawer] = useState(false);
  const [tableHeader, setTableHeader] = useState("");
  const [tableRows, setTableRows] = useState("");
  const [expression, setExpression] = useState("(A | B) & (!A) > B");

  const resetVariables = () => {
    setTableRows([]);
    setTableHeader("");
  };

  const value = {
    setHelpDrawer,
    helpDrawer,
    setTableHeader,
    tableHeader,
    setTableRows,
    tableRows,
    expression,
    setExpression,
    resetVariables,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
