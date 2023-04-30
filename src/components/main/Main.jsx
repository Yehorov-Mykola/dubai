import "./main.scss";
import Modal from "../modal/Modal";
import MailForm from "../mailForm/MailForm";
import LatestProgect from "./latestProgect/LatestProgect";
import UsefulArticlesCard from "./usefulArticlesCard/UsefulArticlesCard";
import Spoilers from "./spoilers/Spoilers";
import Reviews from "./reviews/Reviews";
import Video from "./video/Video";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, Autoplay } from "swiper";
import "swiper/css/autoplay";
import i18n from "./../../_i18n/_i18n";
import { useTranslation } from "react-i18next";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState(false);
  const mainData = data?.main;

  const [t] = useTranslation(["translation"]);

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
              {mainData?.slider?.map((item, index) => (
                <SwiperSlide>
                  <img key={index.id} src={item.url} alt={item.title} />
                </SwiperSlide>
              ))}
              <div className="swiper__navigation">
                <div className="swiper-buttons">
                  <span className="swiper-button swiper-button--prev">
                    {t("main.prevBtn")}
                  </span>
                  <span className="swiper-button swiper-button--next">
                  {t("main.nextBtn")}
                  </span>
                </div>
                <div className="main-swiper-pagination"></div>
              </div>
            </Swiper>
            <div className="main-content">
              <div className="main-content__text">
                <p className="main-content__descr">{t("main.subtitle")}</p>
                <h1 className="main-content__title" dangerouslySetInnerHTML={{__html: t("main.title")}}></h1>
                <button
                  className="main-content__btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  {t("main.button")}
                </button>
              </div>
              <div className="main-social">
                {mainData?.social?.map((item, index) => (
                  <NavLink key={index.id} className="main-social__link" to={item.href}>
                    <img src={item.url} alt={item.title} />
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
          <h2 className="expertise__title">{t("main.expertise.title")}</h2>
          <h3 className="expertise__subtitle">
            {t("main.expertise.subtitle")}
          </h3>
          <p className="expertise__text">
            {t("main.expertise.text")}
          </p>
        </div>
      </section>

      <Video src={mainData?.video} />

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

      <Reviews />

      <Spoilers />


      {isModalOpen && 
        <Modal 
          className={isModalOpen ? 'open' : 'close'}
          onClose={() => setIsModalOpen(false)} 
        />
      }
    </>
  );
}
export default Main;
