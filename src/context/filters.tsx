import React, { createContext, useState, ReactNode } from "react";

interface FilterType {
  category: string;
  price: number;
}

interface FilterContextType {
  filters: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

export const FilterContext = createContext<FilterContextType>({
  filters: { category: "all", price: 0 },
  setFilter: () => {},
});

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilter] = useState<FilterType>({
    category: "all",
    price: 0,
  });

  const contextValue: FilterContextType = {
    filters,
    setFilter,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
