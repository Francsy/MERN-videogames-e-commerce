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
  const [buttons, setButtons] = useState({
    name: { text: "Sort by name", hora: "", direction: "", arrow: "" },
    price: { text: "Sort by price", hora: "", direction: "", arrow: "" },
    relevance: { text: "Sort by relevance", hora:"", direction: "", arrow: ""}
  })

  useEffect(() =>{
    const handleButtonContent = () => {
      const newButtons = {...buttons }
      Object.keys(newButtons).forEach(key => {
        if (key === sortBy) {
          newButtons[key].className = "selected-filter"
          newButtons[key].arrow = order === "asc" ? '⬇' : '⬆';
        } else {
          newButtons[key].className = ""
          newButtons[key].arrow = ""
        }
      })
      setButtons(newButtons)
    }
    handleButtonContent()
// eslint-disable-next-line
  },[sortBy, order])


  return <>
    {products.length > 1 ?
    <><button className={buttons.name.className} onClick={()=>orderByRule('name')} >{buttons.name.text}{buttons.name.arrow}</button>
    <button className={buttons.relevance.className} onClick={()=>orderByRule('relevance')}>{buttons.relevance.text}{buttons.relevance.arrow}</button>
    <button className={buttons.price.className} onClick={()=>orderByRule('price')}>{buttons.price.text}{buttons.price.arrow}</button>
    <button onClick={removeRules}>Remove rules</button></> :
    <></>}
    <List products={products} />
    <div className="store-pagination">
      {page === 1 ? <></> : <button onClick={goBack}>Previous</button>}
      {page === 1 && !moreAhead ? <></> : <span>{page}</span>}
      {moreAhead? <button onClick={goNext}>Next</button> : <></>}
      </div>
  </>;
  };

  export default Store;
