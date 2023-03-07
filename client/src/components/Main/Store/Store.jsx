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
    name: { text: "Sort by name", classInfo: "", cross: false, arrow: "" },
    price: { text: "Sort by price", classInfo: "", cross: false, arrow: "" },
    relevance: { text: "Sort by relevance", classInfo:"", cross: false, arrow: ""}
  })

  useEffect(() =>{
    const handleButtonContent = () => {
      const newButtons = {...buttons }
      Object.keys(newButtons).forEach(key => {
        if (key === sortBy) {
          newButtons[key].classInfo = "selected-filter"
          newButtons[key].arrow = order === "asc" ? '⬇' : '⬆';
          newButtons[key].cross = true;
        } else {
          newButtons[key].classInfo = ""
          newButtons[key].arrow = ""
          newButtons[key].cross = false;
        }
      })
      setButtons(newButtons)
    }
    handleButtonContent()
// eslint-disable-next-line
  },[sortBy, order])


  return <>
    {products.length > 1 ?
    <>
    <button className={buttons.name.classInfo} onClick={()=>orderByRule('name')} >{buttons.name.cross === true ? <a onClick={removeRules}> X </a> : <></>}{buttons.name.text}{buttons.name.arrow}</button>
    <button className={buttons.relevance.classInfo} onClick={()=>orderByRule('relevance')}>{buttons.relevance.cross === true ? <a onClick={removeRules}> X </a> : <></>}{buttons.relevance.text}{buttons.relevance.arrow}</button>
    <button className={buttons.price.classInfo} onClick={()=>orderByRule('price')}>{buttons.price.cross === true ? <a onClick={removeRules}> X </a> : <></>}{buttons.price.text}{buttons.price.arrow}</button>
    {/* {sortBy.length > 0 ? <button onClick={removeRules}>No filters</button>:<></>} */}
    </> :
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
