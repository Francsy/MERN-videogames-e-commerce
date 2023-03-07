import React, { useContext, useState, useRef, useEffect } from "react";
import {Link } from "react-router-dom"
import { searchContext } from "../../../context/searchContext";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'


const SearchBar = () => {
  const [productInput, setProductInput] = useState('')

  const {setSearchInput } = useContext(searchContext)

  const inputRef = useRef();
  useEffect(() => {
    setSearchInput(productInput)
    // eslint-disable-next-line
  }, [productInput])

  const handleSearch = () => setProductInput(inputRef.current.value)
  // const removeSearch = () => {
  //   setProductInput('');
  //   inputRef.current.value = '';
  // }

  return <div className="flex items-center">
<Link to="/">
<img
  className="block h-8 w-auto mr-2"
  src="/assets/logo.svg"
  alt="logo"
/>
</Link>
<div className="relative">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" onClick={handleSearch} />
    <label htmlFor="search" className="sr-only">Search</label>
  </div>
  <input
id="search"
name="search"
className="block w-full bg-gray-900 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-400"
placeholder="Search"
type="search"
ref={inputRef}/>
</div>
</div>
};

export default SearchBar;















/* 
Version 1:

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

export default SearchBar; */
