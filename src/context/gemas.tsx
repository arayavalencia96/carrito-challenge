import { createContext, useState, ReactNode } from "react";
import { GemasContextType } from "../types/interface";

export const GemasContext = createContext<GemasContextType>({
  gemas: 3,
  subtractGem: () => {},
  addGem: () => {},
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

  const contextValue: GemasContextType = {
    gemas,
    subtractGem,
    addGem
  };

  return (
    <GemasContext.Provider value={contextValue}>
      {children}
    </GemasContext.Provider>
  );
};
