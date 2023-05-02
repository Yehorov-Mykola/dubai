import "./latestProgect.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Scrollbar } from "swiper";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

function LatestProgect({ title }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categoriess, setCategoriess] = useState([]);
  const [activeItem, setActiveItem] = useState("All");
  const [filters, setFilters] = useState("All");
  const [t] = useTranslation(["translation"]);

  useEffect(() => {
    axios
      .get("articles.json")
      .then(function (response) {
        setData(response.data);
      })
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
    if (filters !== "All"  && filters !== "Всі") {
      setFilteredData(t("latestProgects.articles", { returnObjects: true }).filter((el) => el.category === filters));
    } else {
      setFilteredData(t("latestProgects.articles", { returnObjects: true }));
    }
  };

  useEffect(() => {
    filterByCategory();
  }, [filters, data, t("latestProgects.title")]);

  return (
    <section className="latest-progect">
      <div className="container">
        <div className="latest-progect__up">
          <h2 className="latest-progect__title">{t("latestProgects.title")}</h2>
          <div className="category__wrapper">
            {t("latestProgects.categories", { returnObjects: true }).map((item, index) => (
              <button
                className={`category ${
                  activeItem === item.title ? "category--active" : ""
                }`}
                key={index}
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
              <SwiperSlide key={index}>
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
export default LatestProgect;
