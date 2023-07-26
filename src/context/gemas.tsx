import { createContext, useState, ReactNode } from "react";
import { GemasContextType } from "../types/interface";

export const GemasContext = createContext<GemasContextType>({
  gemas: 3,
  subtractGem: () => {},
  addGem: () => {},
  resetGemas: () => {},
});

export const GemasProvider = ({ children }: { children: ReactNode }) => {
  const [gemas, setGemas] = useState(3);

  const subtractGem = (valorGema: number) => {
    const remainingGems = gemas - valorGema;
    setGemas(remainingGems);
  };

  const addGem = (valorGema: number) => {
    const remainingGems = gemas + valorGema;
    setGemas(remainingGems);
  };

  const resetGemas = () => {
    setGemas(3);
  };

  const contextValue: GemasContextType = {
    gemas,
    subtractGem,
    addGem,
    resetGemas,
  };

  return (
    <GemasContext.Provider value={contextValue}>
      {children}
    </GemasContext.Provider>
  );
};
