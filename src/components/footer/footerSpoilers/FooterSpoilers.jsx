import "./footerSpoilers.scss";
import FooterSpoiler from "./footerSpoiler/FooterSpoiler";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

function FooterSpoilers() {
  const [data, setData] = useState(false);
  const faqData = data?.main?.faq;

  const [t] = useTranslation(["translation"]);

  useEffect(() => {
    axios.get("/localization/en.json").then(function (response) {
      setData(response.data);
    });
  }, []);

  return (
    <section className="footer-spoilers">
      <div className="container container--middle">
        <div className="footer-spoilers__inner">
          {t("main.faq.spoilers", { returnObjects: true }).map((item, index) => (
            <FooterSpoiler key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default FooterSpoilers;
