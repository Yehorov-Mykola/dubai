import "./reviewItem.scss";
import { Link } from "react-router-dom";

function ReviewItem({ item }) {
  return (
    <>
      <div key={item.id}  className="review-item">
        <img className="review-item__img" src={item.url} alt={item.title} />          
          <h3 className="review-item__name">{item.name}</h3>
          <p className="review-item__position">
            {item.position} in <Link to={item.link} className="review-item__company">{item.company}</Link>
          </p>
          <p className="review-item__text">
            {item.text}
          </p>
      </div>
    </>
  );
}

export default ReviewItem;