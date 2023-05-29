import "./articles.scss";
import { Link } from "react-router-dom";
import ArticlesCard from "./articlesCard/ArticlesCard";

function Articles({ data, services }) {
  return (
    <section className="articles">
        <div className="container container--middle">
        <div className="articles__up">
          <h2 className={`section-title ${services && "section-title--services"}`}>
            {data.title}
          </h2>
          <Link className="articles__link" to={data.link.href}>
            {data.link.title}
          </Link>
        </div>
          <div className="articles__cards">
          {data.cards.map((item, index) => (
                <ArticlesCard key={index} item={item} services = {services}/>
            ))}
          </div>
        </div>
    </section>
  );
}

export default Articles;
