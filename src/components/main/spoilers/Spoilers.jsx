import "./spoilers.scss";
import Spoiler from "./spoiler/Spoiler";
import { useState, useEffect } from "react";
import axios from "axios";

function Spoilers() {
  const [data, setData] = useState(false);
  const faqData = data?.main?.faq;

  useEffect(() => {
    axios.get("/localization/en.json").then(function (response) {
      setData(response.data);
    });
  }, []);

  return (
    <section class="spoilers">
      <div className="container container--middle">
        <h2 className="section-title">
          {faqData?.title}
        </h2>
        <div class="spoilers__inner">
          {faqData?.spoilers?.map((item, index) => (
            <Spoiler key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Spoilers;
