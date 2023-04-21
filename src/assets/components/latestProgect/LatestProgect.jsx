import "./latestProgect.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Scrollbar } from "swiper";
import "swiper/css/pagination";

function LatestProgect({ title }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categoriess, setCategoriess] = useState([]);
  const [activeItem, setActiveItem] = useState("All");
  const [filters, setFilters] = useState("All");

  useEffect(() => {
    axios
      .get("articles.json")
      .then(function (response) {
        //console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  useEffect(() => {
    axios
      .get("categories.json")
      .then(function (response) {
        setCategoriess([{ title: "All" }, ...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  const filterByCategory = () => {
    if (filters !== "All") {
      setFilteredData(data.filter((el) => el.category === filters));
    } else {
      setFilteredData(data);
    }
  };

  useEffect(() => {
    filterByCategory();
  }, [filters, data]);

  return (
    <section className="latest-progect">
      <div className="container">
        <div className="latest-progect__up">
          <h2 className="latest-progect__title">{title}</h2>
          <div className="category__wrapper">
            {categoriess.map((item, index) => (
              <button
                className={`category ${
                  activeItem === item.title ? "category--active" : ""
                }`}
                key={index.id}
                onClick={() => {
                  setActiveItem(item.title);
                  setFilters(item.title);
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="slider-wrapper">
          <Swiper
            modules={[Pagination, Scrollbar]}
            style={{ width: "100%" }}
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {filteredData.map((item, index) => (
              <SwiperSlide>
                <Card key={index} item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
export default LatestProgect;
