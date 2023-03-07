import React from "react";
import Card from './Card'
import { v4 as uuidv4 } from 'uuid'



const List = (props) => {
  const printProducts = () => props.products.map(product => <Card product={product} key={uuidv4()}/>)

  return <section>
    {printProducts()}

  </section>;
};

export default List;
