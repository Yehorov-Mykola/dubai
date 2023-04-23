import "./card.scss";
import { Link } from "react-router-dom";

function Card({ item }) {
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
            <a href="/" className="card-info__link">
              See project
            </a>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
