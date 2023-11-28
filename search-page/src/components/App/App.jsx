import { useState, useEffect } from 'react'
import Cards from '../Characters/Cards'
import './App.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import SearchBar from '../Search/SearchBar'
import Pagination from '../Pagination/Pagination'


function App() {

  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchData, updateFetchData] = useState([]);
  let { info, results } = fetchData;


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      updateFetchData(data);
    })()
  }, [api]);

  return (
    <>
      <div className="App">
        <h1 className='title'>Rick & Morty <font color="green">Data Base</font></h1>


        <SearchBar setPageNumber={setPageNumber} setSearch={setSearch} />

        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-8"></div>
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>

     
    </>
  )
}

export default App