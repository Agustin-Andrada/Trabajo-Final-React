import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css'

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  const customNextLabel = (
    <button className="btn btn-success">
      Next
    </button>
  );

  const customPrevLabel = (
    <button className="btn btn-success">
      Prev
    </button>
  );

  return (
    <ReactPaginate 
      className="pagination justify-content-center gap-3 my-4"
      forcePage={ pageNumber === 1? 0 : pageNumber -1 }
      nextLabel={customNextLabel}
      previousLabel={customPrevLabel}
      pageClassName='page-item'
      pageLinkClassName='page-link'
      activeClassName='active'
      onPageChange={(data) => {
        setPageNumber(data.selected+1)
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
