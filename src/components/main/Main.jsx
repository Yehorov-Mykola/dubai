import "./main.scss";
import Modal from "../modal/Modal";
import MailForm from "../mailForm/MailForm";
import LatestProgect from "./latestProgect/LatestProgect";
import UsefulArticlesCard from "./usefulArticlesCard/UsefulArticlesCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, Autoplay } from "swiper";
import "swiper/css/autoplay";

function Main() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [data, setData] = useState(false);
  const mainData = data?.main;

  useEffect(() => {
    axios.get("/localization/en.json").then(function (response) {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <section className="main-slider">
        <div className="container">
          <div className="main-slider__inner">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              autoplay={{ delay: 5000 }}
              pagination={{
                el: ".main-swiper-pagination",
                type: "bullets",
              }}
              navigation={{
                nextEl: ".swiper-button--next",
                prevEl: ".swiper-button--prev",
              }}
            >
              {mainData?.slider?.map((i) => (
                <SwiperSlide>
                  <img src={i.url} alt={i.title} />
                </SwiperSlide>
              ))}
              <div className="swiper__navigation">
                <div className="swiper-buttons">
                  <span className="swiper-button swiper-button--prev">
                    {mainData?.prevBtn}
                  </span>
                  <span className="swiper-button swiper-button--next">
                    {mainData?.nextBtn}
                  </span>
                </div>
                <div className="main-swiper-pagination"></div>
              </div>
            </Swiper>
            <div className="main-content">
              <div className="main-content__text">
                <p className="main-content__descr">{mainData?.subtitle}</p>
                <h1 className="main-content__title">{mainData?.title}</h1>
                <button
                  className="main-content__btn"
                  onClick={() => setIsShowModal((prev) => !prev)}
                >
                  {mainData?.button}
                </button>
              </div>
              <div className="main-social">
                {mainData?.social?.map((i) => (
                  <NavLink className="main-social__link" to={i.href}>
                    <img src={i.url} alt={i.title} />
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LatestProgect title="Latest projects" />

      <section className="expertise">
        <div className="container container--narrow">
          <h2 className="expertise__title">Our expertise</h2>
          <h3 className="expertise__subtitle">
            "The best apartment in Dubai" we will find your dream
          </h3>
          <p className="expertise__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nibh massa, euismod ut libero id, blandit posuere augue. Morbi porta
            volutpat diam egestas ultrices. Phasellus tempus fringilla neque,
            nec viverra orci tristique vel. In efficitur vehicula magna, varius
            pellentesque nisl vehicula vel. Aenean vel sem ac elit commodo
            finibus in nec massa. Nulla facilisi. Nulla vestibulum venenatis
            sollicitudin. Etiam auctor mollis justo eu tincidunt. Aliquam varius
            varius tortor. Cras id venenatis sem. Quisque ut risus ex. Sed et
            tempor massa. Praesent ac eros hendrerit, congue justo ac, molestie
            urna. Fusce nec neque vitae dolor dapibus elementum. Maecenas nec
            orci quis sem condimentum dapibus varius a lorem. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      <section className="quote">
        <div className="container container--middle">
          <div className="quote__inner">
            <p className="quote__text">
              {mainData?.quote?.text}
              <span className="quote__author">
                {" "}
                - {mainData?.quote?.author}
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="main-apartments">
        <div className="container container--middle">
          <div className="main-apartments__cards">
            {mainData?.mainApartments.map((i) => (
              <div className="main-apartments__card">
                <img className="main-apartments__img" src={i.url} alt={i.title} />
                <p className="main-apartments__text">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MailForm title="Contact us" subtitle="Do you have any questions?" />

      <section className="useful-articles">
        <div className="container container--middle">
        <div className="useful-articles__up">
          <h2 className="section-title">
            {mainData?.usefulArticles?.title}
          </h2>
          <NavLink className="useful-articles__link" to={mainData?.usefulArticles?.link?.href}>
            {mainData?.usefulArticles?.link?.title}
          </NavLink>
        </div>
          <div className="useful-articles__cards">
          {mainData?.usefulArticles?.cards?.map((item, index) => (
                <UsefulArticlesCard key={index} item={item} />

            ))}
          </div>
        </div>
      </section>

      {isShowModal && <Modal />}
    </>
  );
}
export default Main;
