import "./blogItem.scss";
import { NavLink } from "react-router-dom";

function BlogItem({ item }) {
  return (
    <div key={item.id} className="blog-item">
      <img className="blog-item__img" src={item.img} alt={item.title} />
      <div className="blog-item__info">
        <h3 className="blog-item__title">{item.title}</h3>
        <p className="blog-item__text">{item.text}</p>
        <div className="blog-item__link-wrapper">
          <NavLink to={item.link} className="blog-item__link">
            {item.btn}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
