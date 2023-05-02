import "./spoilers.scss";
import Spoiler from "./spoiler/Spoiler";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

function Spoilers() {
  const [data, setData] = useState(false);
  const faqData = data?.main?.faq;

  const [t] = useTranslation(["translation"]);

  useEffect(() => {
    axios.get("/localization/en.json").then(function (response) {
      setData(response.data);
    });
  }, []);

  return (
    <section className="spoilers">
      <div className="container container--middle">
        <h2 className="section-title">
          {t("main.faq.title")}
        </h2>
        <div className="spoilers__inner">
          {t("main.faq.spoilers", { returnObjects: true }).map((item, index) => (
            <Spoiler key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Spoilers;
