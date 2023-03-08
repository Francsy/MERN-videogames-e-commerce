import React from "react";
import SearchBar from "./SearchBar"
import Nav from "./Nav"
import { Disclosure } from '@headlessui/react'

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
            <SearchBar/>
            <Nav />
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}


/* 
1 version

import React from "react";
import SearchBar from "./SearchBar"
import Nav from "./Nav"


const Header = () => {
  return <header>
    
    <SearchBar/>
    <Nav />
    </header>;
};

export default Header;
 */