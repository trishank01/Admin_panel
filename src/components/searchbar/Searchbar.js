import React from 'react'
import icon from "../../img/search-icon.svg";

const Searchbar = (props) => {
   const {search,onSearchValue} = props
  const onChangeSearch = (e) => {
      const value = e.target.value
      onSearchValue(value)
  }
  return (
    <>
          <form action="/">
        <img src={icon} alt="Search Icon" />
        <input type="text" placeholder="Enter something" name="search-box" id="search-box" value={search} onChange={onChangeSearch} />
          </form>
    </>
  )
}

export default Searchbar