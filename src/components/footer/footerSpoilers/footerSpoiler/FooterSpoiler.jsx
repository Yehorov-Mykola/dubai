import "./footerSpoiler.scss";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Button from "../../../button/Button";

function FooterSpoiler({ item }) {
  const [t] = useTranslation(["translation"]);
  return (
    <div className="footer-spoiler">
      <input
        type="checkbox"
        className="footer-spoiler__checkbox"
        id={item.id}
      />
      <label className="footer-spoiler__heading" htmlFor={item.id}>
        {item.title}
      </label>
      <div className="footer-spoiler__content">
        <ul className="footer-category__submenu">
          
          {item.submenu.map((item, index) => (
            <li key={index} className="footer-category__submenu-item">
              <NavLink className="footer-category__submenu-link" to={item.href}>
                {item.title}
              </NavLink>
            </li>
          ))}
         
        </ul>
      </div>
    </div>
  );
}
export default FooterSpoiler;
