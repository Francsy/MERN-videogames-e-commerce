import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from '../../../../../redux'

const Card = (props) => {
  const dispatch = useDispatch()
  return <article>
    <img src={props.product.image} alt="" />
    <p>ID: {props.product.id} Nombre: {props.product.name} Precio: {props.product.price} Relevancia: {props.product.relevance} Manufacturer: {props.product.distributor.distributor_name} </p>
    <Link to={`/product/${props.product.id}`}>
    <button>More Info</button>
    </Link>
    <button onClick={()=>dispatch(addToCart(props.product))}>Add to cart</button>
    </article>;
};

export default Card;
