import "./articlesCard.scss";
import { Link } from "react-router-dom";

function ArticlesCard({ item, services }) {
  return (
      <div className="useful-articles__card">
        <img className="useful-articles__img" src={item.url} alt="" />
        <div className="useful-articles__card-inner">
          <h3 className="useful-articles__title">{item.title}</h3>
        </div>        
        <div className={`articles-card-info ${services && "articles-card-info--services"}`}>
          <p className="articles-card-info__date">{item.date}</p>
          <h3 className="useful-articles__title">{item.title}</h3>
          <p className="articles-card-info__text">
          {item.text}
          </p>
          <Link className="articles-card-info__link" href={item.link}>{item.btn}</Link>
        </div>
      </div>
  );
}
export default ArticlesCard;
