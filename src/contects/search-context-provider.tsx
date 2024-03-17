"use client";

import { type Pet } from "@/lib/types";
import { createContext, useState } from "react";

type SearchContextProviderProps = {
  children: React.ReactNode;
};

type TSearchContext = {
  searchQuery: string;
  handleChangeSearchQuery: (newValue: string) => void;
};

export const SearchContext = createContext<TSearchContext | null>(null);

export default function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  const [searchQuery, setSeachQuery] = useState("");

  const handleChangeSearchQuery = (newValue: string) => {
    setSeachQuery(newValue);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, handleChangeSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
