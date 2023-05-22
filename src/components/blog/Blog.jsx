import "./blog.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogItem from "./blogItem/BlogItem";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";
import {useMedia} from 'use-media';

function Blog() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState("");

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const isDesktop = useMedia ({maxWidth: "760px"})

  let itemsPerPage = 6;
  if (isDesktop) itemsPerPage = 5;

  const [t] = useTranslation(["translation"]);

  useEffect(() => {
    axios.get("/localization/en.json").then(function (response) {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredData?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredData?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredData]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData?.length;
    setItemOffset(newOffset);
  };

  const search = () => {
    if(filters === ""){
      setFilteredData(t("blog.cards", { returnObjects: true }));
    }
    else{
      setFilteredData(
        t("blog.cards", { returnObjects: true })?.filter((object) => {
          return object?.title.toLowerCase().includes(filters.search.toLowerCase());
        })
      )
    }    
  }
  
  useEffect(() => {  
    search();
  }, [filters, t])

  return (
    <section className="blog">
      <div className="blog__container container">
        <div className="blog__up">
          <h2 className="section-title">{t("blog.title")}</h2>
          <form  className="blog__form">
            <input className="blog__input" type="text" placeholder={t("blog.searchPlaceholder")} onChange={(event) => {
            setFilters((prevState) => ({
            ...prevState, 
            search: event.target.value
           }))
          }} />
          </form>
        </div>
        <div className="container container--middle">
          <div className="blog__items">
            {currentItems?.map((item, index) => (
              <BlogItem key={index} item={item} />
            ))}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="."
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="."
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num__prev"
            nextLinkClassName="page-num__next"
            activeLinkClassName="active-num"
            breakLinkClassName="break-points"
            disabledLinkClassName="disabled-num"
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;
