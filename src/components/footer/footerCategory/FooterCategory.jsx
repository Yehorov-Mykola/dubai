import { useState } from "react";
import "./footerCategoty.scss";
import { NavLink } from "react-router-dom";
import Button from "../../button/Button";



function FooterCategory({ menuItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="footer-category">
      <NavLink className="footer-category__title" to={menuItem.link}>{menuItem.title}</NavLink>
      <ul className="footer-category__submenu">
        {menuItem?.submenu?.map((item, index) => (
          <li key={index} class="footer-category__submenu-item">
            <NavLink className="footer-category__submenu-link" to={item.href}>
              {item.title}
            </NavLink>
          </li>
        ))}
        {(menuItem.title === "Contact") && <li class="footer-category__submenu-btn"><Button onClick={() => setIsModalOpen(true)}>{menuItem.btn}</Button></li>}
      </ul>
      
    </div>
  );
}
export default FooterCategory;
