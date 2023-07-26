import { createContext, useState, ReactNode } from "react";
import { FilterContextType, FilterType } from "../types/interface";

export const FiltersContext = createContext<FilterContextType>({
  filters: { category: "Todos", price: 1 },
  setFilter: () => {},
});

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilter] = useState<FilterType>({
    category: "Todos",
    price: 1,
  });

  const contextValue: FilterContextType = {
    filters,
    setFilter,
  };

  return (
    <FiltersContext.Provider value={contextValue}>
      {children}
    </FiltersContext.Provider>
  );
};
