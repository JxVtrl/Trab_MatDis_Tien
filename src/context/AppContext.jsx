import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { useToast } from "@chakra-ui/react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const toast = useToast();
  const [helpDrawer, setHelpDrawer] = useState(false)
  const [tableHeader, setTableHeader] = useState([<></>])
  const [tableRows, setTableRows] = useState([<></>])
  
  const value = {
    setHelpDrawer,
    helpDrawer,
    setTableHeader,
    tableHeader,
    setTableRows,
    tableRows,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
