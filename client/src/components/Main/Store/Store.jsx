import React, { useContext, useState, useEffect } from "react";
import { searchContext } from "../../../context/searchContext";
import axios from 'axios'
import List from './List'

const Store = () => {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [order, setOrder] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [page, setPage] = useState(1)
  const [moreAhead, setMoreAhead] = useState(true)

  const { searchInput } = useContext(searchContext)

  useEffect(() => {
    const printProducts = async () => {
      const res = await axios.get(`http://localhost:5000/api/products`, {
        params: {
          page: page,
          sortBy: sortBy ? sortBy : undefined,
          order: order ? order : undefined,
          search: search ? search : undefined
        }
      });
      console.log(res.data)
      const {products, hasMore } = res.data;
      setProducts(products);
      hasMore ? setMoreAhead(true) : setMoreAhead(false)
      
    }
    printProducts()
  },
    [page, sortBy, order, search])

    useEffect(()=>{
      setSearch(searchInput)
    }, [searchInput])


  const orderByRule = (rule) => {
    if (sortBy !== rule) {
      setSortBy(rule)
      setOrder('asc')
      if (page !== 1) {
        setPage(1)
      }
    } else {
      order === 'asc' ? setOrder('des') : setOrder('asc')
    }
  }

  const removeRules = () => {
    setSortBy('')
    setOrder('')
    setPage(1)
  }

  const goNext = () => setPage(page + 1)
  const goBack = () => {
    if (page !== 1) {
      setPage(page - 1)
    }
  }


  return <div> {products.length > 1 ?
    <><button onClick={()=>orderByRule('name')}>Sort by name</button>
    <button onClick={()=>orderByRule('relevance')}>Sort by relevance</button>
    <button onClick={()=>orderByRule('price')}>Sort by price</button>
    <button onClick={removeRules}>Remove rules</button></> :
    <></>}
    <List products={products} />
    <div className="store-pagination">
      {page === 1 ? <></> : <button onClick={goBack}>Previous</button>}
      {page === 1 && !moreAhead ? <></> : <span>{page}</span>}
      {moreAhead? <button onClick={goNext}>Next</button> : <></>}
      </div>
  </div>;
  };

  export default Store;
