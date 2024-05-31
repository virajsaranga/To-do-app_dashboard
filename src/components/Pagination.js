import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={''}
      nextLabel={''}
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={8}
      onPageChange={onPageChange}
      containerClassName={'pagination'}
      activeClassName={'active'}
    />
  );
};
 
export default Pagination;
