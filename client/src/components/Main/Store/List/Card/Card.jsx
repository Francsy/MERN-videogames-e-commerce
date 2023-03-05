import React from "react";
import { Link } from 'react-router-dom';

const Card = (props) => {
  return <article>
    <p>ID: {props.product.id} Nombre: {props.product.name} Precio: {props.product.price} Relevancia: {props.product.relevance} Manufacturer: {props.product.manufacturer.manufacturer_name} </p>
    <Link to={`/product/${props.product.id}`}>
    <button>More Info</button>
    </Link>
    </article>;
};

export default Card;
