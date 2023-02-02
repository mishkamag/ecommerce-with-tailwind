import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const inputHandler = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm.length > 0) {
      setIsModalOpen(true);
    }
  };

  return (
    <SearchContext.Provider value={{ searchTerm, isModalOpen, inputHandler }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
