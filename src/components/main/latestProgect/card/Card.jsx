import "./card.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


function Card({ item }) {
  const [t] = useTranslation(["translation"]);
  return (
    <>
      <Link key={item.id} to={`/${item.id}`} className="card">
        <div className="card__inner">
          <img className="card__img" src={item.image} alt={item.title} />
          <h3 className="card__title">{item.title}</h3>
        </div>
        <div className="card-info">
          <h3 className="card-info__title">{item.title}</h3>
          <p className="card-info__text">{item.text}</p>
          <div className="card-info__bottom">
            <p  className="card-info__link">
            {t("latestProgects.link")}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
