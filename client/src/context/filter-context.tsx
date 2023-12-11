import React, { createContext, useContext, useState } from "react";


export type Filter = {
  category?: string;
  color?: string;
  size?: string;
}
type FilterContextType = {
  filters: Filter;
  setFilters: (filters: Filter) => void;
};

type Prop = {
  children: React.ReactNode;
};
const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(" FilterContext must be used within a FilterProvider");
  }
  return context;
};

export const FilterProvider = ({ children }: Prop) => {
  const [filters, setFilters] = useState({} as Filter);

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};