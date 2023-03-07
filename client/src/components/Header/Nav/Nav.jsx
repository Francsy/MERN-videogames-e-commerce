import React from "react";
import {Link } from "react-router-dom"
import { useSelector } from 'react-redux';

const Nav = () => {

  const itemsQuantity = useSelector(state => state.numberItems)
  return <div>
    <Link to="/" >Home</Link>
    <Link to="/cart" >Cart</Link>
    <span>{itemsQuantity}</span>

    </div>;
};

export default Nav;
