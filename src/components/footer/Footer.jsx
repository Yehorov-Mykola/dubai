import "./footer.scss";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import FooterCategory from "./footerCategory/FooterCategory";
import FooterSpoilers from "./footerSpoilers/FooterSpoilers";
import { useTranslation } from "react-i18next";
import axios from "axios";

function Footer() {
  const [data, setData] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isShowSubmenu, setIsShowSubmenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const footerData = data?.footer;

  useEffect(() => {
    axios.get("/localization/en.json").then(function (response) {
      setData(response.data);
    });
  }, []);
  const [t] = useTranslation(["translation"]);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">
            <NavLink to="/" className="logo">
              DubaiRealty
            </NavLink>
          </div>
          <nav className="footer-menu">
            <ul className="footer-menu-items">
              {t("footer.menu", { returnObjects: true }).map((item, index) => (
                <li key={index} className="footer-menu-item">
                  <FooterCategory  menuItem={item} onOpen={() => setIsModalOpen(true)}/>
                </li>
              ))}
            </ul>
            <FooterSpoilers />
          </nav>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="footer-copyright__inner">
              <h3 className="footer-copyright__title">
                {t("footer.copyright.title")}
              </h3>
              <div className="footer-copyright__social">
                {footerData?.copyright?.social?.map((item, index) => (
                  <NavLink
                    key={index}
                    className="footer-copyright__link"
                    to={item.href}
                  >
                    <img src={item.url} alt={item.title} />
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {isModalOpen && 
        <Modal 
          className={isModalOpen ? 'open' : 'close'}
          onClose={() => setIsModalOpen(false)} 
        />
      }
    </>
  );
}

export default Footer;
