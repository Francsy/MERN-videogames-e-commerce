import React, { useContext, useRef } from "react";
import { searchContext } from "../../../context/searchContext";

const SearchBar = () => {
  const {setSearch } = useContext(searchContext)

  const inputRef = useRef();

  const handleSearch = () => setSearch(inputRef.current.value)

  return <div><input type="text" ref={inputRef}/><input type="button" value="search" onClick={handleSearch}/></div>;
};

export default SearchBar;
