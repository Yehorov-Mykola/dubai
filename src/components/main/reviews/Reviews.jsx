import "./reviews.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewItem from "./reviewItem/ReviewsItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Scrollbar } from "swiper";
import "swiper/css/pagination";

function Reviews() {
  const [data, setData] = useState(false);
  const reviewsData = data?.main?.reviews;

  useEffect(() => {
    axios.get("/localization/en.json").then(function (response) {
      setData(response.data);
    });
  }, []);

  return (
    <section className="reviews">
      <div className="container container--reviews">
        <div className="container container--middle">
          <div className="slider-wrapper">
            <Swiper
              modules={[Pagination, Scrollbar]}
              style={{ width: "100%" }}
              spaceBetween={20}
              slidesPerView={2}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {reviewsData?.map((item, index) => (
                <SwiperSlide>
                  <ReviewItem key={index} item={item} />
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
