import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Details = () => {

  const [product, setProduct] = useState({})

  const { id } = useParams()
  const navigate = useNavigate()


  useEffect(() => {
    const printProduct = async () => {
      const res = await axios.get(`http://localhost:5000/api/products/${id}`)
      console.log(res.data)
      setProduct(res.data)
      console.log(product)
    }
    printProduct()
  }
    // eslint-disable-next-line
    , [])

  const goBack = () => navigate(-1)

  return <>
    <button onClick={goBack}>&lt; Back</button>
    {Object.keys(product).length !== 0 ? 
    <article>
    <h1>{product.name}</h1>
    <h2>Relevance: {product.relevance}/100</h2>
    <h2>Price: {product.price}€</h2>
    <h2>Distributor:</h2>
    <ul>
      <li>Company: {product.distributor.distributor}</li>
      <li>CIF: {product.distributor.CIF}</li>
      <li>Address: {product.distributor.address}</li>
    </ul>
  </article> : <span>Loading...</span>
  } 
  </>;
};

export default Details;
