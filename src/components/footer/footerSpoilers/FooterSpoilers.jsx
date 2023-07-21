import "./footerSpoilers.scss";
import FooterSpoiler from "./footerSpoiler/FooterSpoiler";
import FooterCategory from "./../footerCategory/FooterCategory";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

function FooterSpoilers({onOpen}) {
  const [data, setData] = useState(false);
  const faqData = data?.main?.faq;

  const [t] = useTranslation(["translation"]);

  useEffect(() => {
    axios.get("/localization/en.json").then(function (response) {
      setData(response.data);
    });
  }, []);

  return (
    <div className="footer-spoilers">
      <div className="container container--middle">
        <div className="footer-spoilers__inner">
          {t("footer.menu", { returnObjects: true }).map(function(item, index) {
              if (item.id !== "footer-5")
            {
              return <FooterSpoiler key={index} item={item} />
            }
          })}
        </div>
      </div>
      <div className="footer-spoilers__inner">
          {t("footer.menu", { returnObjects: true }).map(function(item, index) {
              if (item.id === "footer-5")
            {
              return <FooterCategory key={index}  menuItem={item} onOpen={onOpen}/>
            }
          })}
        </div>
    </div>
  );
}
export default FooterSpoilers;
