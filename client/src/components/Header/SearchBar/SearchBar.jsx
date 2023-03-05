import React, { useContext, useState, useRef, useEffect } from "react";
import { searchContext } from "../../../context/searchContext";

const SearchBar = () => {
  const [productInput, setProductInput] = useState('')

  const {setSearchInput } = useContext(searchContext)

  const inputRef = useRef();
  useEffect(() => {
    setSearchInput(productInput)
    // eslint-disable-next-line
  }, [productInput])

  const handleSearch = () => setProductInput(inputRef.current.value)
  const removeSearch = () => {
    setProductInput('');
    inputRef.current.value = '';
  }

  return <div>
    <input type="text" ref={inputRef}/><input type="button" value="search" onClick={handleSearch}/>
    {productInput ? <button onClick={removeSearch}>X</button>:<></>}
  </div>;
};

export default SearchBar;
