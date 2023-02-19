import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from '../articles/product';


const Items = ({ currentItems }) => {
    return (
        <>
            {currentItems &&
                currentItems.map((item, idx) => (
                    <Product item={item} key={idx}></Product>
                ))}
        </>
    );
}

const PaginatedItems = ({ itemsPerPage, products, setCurrentItems, categories, SortType }) => {


    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, categories, SortType]);
   
    useEffect(()=>{
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(products.slice(itemOffset, endOffset));
        
    },[products])
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(products.slice(itemOffset, endOffset))
    }, [])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    return (

        <ReactPaginate
            className='pagination Custom-Manager justify-content-center mt-4'
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />

    );
}

export { Items, PaginatedItems };