import React from 'react'
import './SearchBar.css'


const SearchBar = ({ setSearch, setPageNumber }) => {
  return (
    <form className="searchbar">
      <button onClick={e=>{e.preventDefault()}} className="btn btn-primary">Buscar</button>
      <input 
      onChange={e=>{
        setPageNumber(1);
        setSearch(e.target.value);
      }}
        placeholder="Busqueda por personajes"  type="text" className='input' />      
    </form>
  )
}


export default SearchBar
