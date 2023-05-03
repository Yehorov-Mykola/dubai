import "./reviews.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewItem from "./reviewItem/ReviewsItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Scrollbar } from "swiper";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

function Reviews() {

  const [t] = useTranslation(["translation"]);

  return (
    <section className="reviews">
      <div className="container container--reviews">
        <div className="container container--middle">
          <div className="slider-wrapper">
            <Swiper
              modules={[Pagination, Scrollbar]}
              style={{ width: "100%" }}
              spaceBetween={20}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              breakpoints={{
                360: {
                  slidesPerView: 1,
                  slideToClickedSlide: true,
              },
                760: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    slideToClickedSlide: true,
                }
              }
            }
            >
              {t("main.reviews.items", { returnObjects: true }).map((item, index) => (
                <SwiperSlide key={index}>
                  <ReviewItem item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Reviews;
