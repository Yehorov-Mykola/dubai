import "./services.scss";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Articles from "../articles/Articles";
import { useTranslation } from "react-i18next";
import MailForm from "../mailForm/MailForm";
import { useMedia } from "use-media";

function Services() {
  const [t] = useTranslation(["translation"]);

  function checkList(text){
    if (text === "true"){
      return "✓"
    }
    else if (text === "false"){
      return ""
    }
    else{
      return text
    }
  }

  return (
    <section className="services">
      <div className="container">
        <div className="services__up">
          <div className="container container--middle">
            <div className="services__up-inner">
              <p className="services__subtitle">{t("services.subtitle")}</p>
              <h2
                className="services__title"
                dangerouslySetInnerHTML={{ __html: t("services.title") }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="services__content">
        <div className="container container--middle">
          <ol className="services__breadcrumb-list breadcrumb-list">
            <ul className="breadcrumb-list">
              {t("services.navigation", { returnObjects: true }).map(
                (item, index) => (
                  <li className="breadcrumb-list__item" key={index}>
                    <NavLink className="breadcrumb-list__link" to={item.link}>
                      {item.title}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </ol>
        </div>
        <div className="services__content-inner">
          <div className="container container--narrow">
            <div
              className="services__content-text"
              dangerouslySetInnerHTML={{ __html: t("services.text") }}
            />
            <div
              className="services__content-text"
              dangerouslySetInnerHTML={{ __html: t("services.text") }}
            />
          </div>
        </div>
        <div className="services__content-img-wrapper">
          <div className="container container--middle">
            <img
              className="services__content-img"
              src="./img/services/hotel.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="services__methods">
          <div className="container container--narrow">
            <h3 className="services__methods-title">
              {t("services.methods.title")}
            </h3>
            <div
              className="services__methods-text"
              dangerouslySetInnerHTML={{ __html: t("services.methods.text") }}
            />
          </div>
        </div>

        <div className="services__quote">
          <div className="container container--narrow">
            <div className="services__quote-box">
              <p className="services__quote-text">{t("services.quote.text")}</p>
              <p className="services__quote-author">
                {t("services.quote.author")}
              </p>
              <p className="services__quote-position">
                {t("services.quote.position")}
              </p>
            </div>
          </div>
        </div>

        <div className="services__photos">
          <div className="container container--middle">
            <div className="services__photos-inner">
              <img
                src="./img/services/hotel-2.jpg"
                alt=""
                className="services__photos-item services__photos-item--1"
              />
              <img
                src="./img/services/hotel-1.jpg"
                alt=""
                className="services__photos-item services__photos-ite--2"
              />
              <img
                src="./img/services/hotel-3.jpg"
                alt=""
                className="services__photos-item services__photos-item--3"
              />
            </div>
          </div>
        </div>

        <div className="services__facts">
          <div className="container container--narrow">
            <div className="services__facts-inner">
              {t("services.facts", { returnObjects: true }).map(
                (item, index) => (
                  <div className="services__fact" key={index}>
                    <h4
                      className="services__fact-title"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <p className="services__fact-descr">{item.descr}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="services__challenge">
          <div className="container container--narrow">
            <h3 className="services__challenge-title">
              {t("services.challenge.title")}
            </h3>
            <p className="services__challenge-text">
              {t("services.challenge.titleText")}
            </p>
            <h4 className="services__challenge-subtitle">
              {t("services.challenge.subtitle")}
            </h4>
            <p className="services__challenge-text">
              {t("services.challenge.subTitleText")}
            </p>
          </div>
        </div>

        <div className="services__list">
          <div className="container container--narrow">
            <ul className="services__list-items">
              {t("services.list", { returnObjects: true }).map(
                (item, index) => (
                  <li className="services__list-item" key={index}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <MailForm
          title={t("mailForm.title")}
          subtitle={t("mailForm.subtitle")}
        />

        <div className="services__table">
          <div className="container container--middle">
            <table className="table">
              <thead className="table__head">
                <tr className="table__head-line">
                  {t("services.table.thead", { returnObjects: true }).map(
                    (item, index) => (
                      <th className="table__item" key={index}>
                        {item}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="table__body">
                {t("services.table.tbody", { returnObjects: true }).map(
                  (item, index) => (
                    <tr className="table__body-line" key={index}>
                      {item.map((item, index) => (
                        <td className="table__item" key={index}>
                          {checkList (item)}
                        </td>
                      ))}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Articles  data={t("services.articles", { returnObjects: true })} services/>
    </section>
  );
}

export default Services;
