import "./footer.scss";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import FooterCategory from "./footerCategory/FooterCategory";
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
              {footerData?.menu?.map((item, index) => (
                <li key={index} className="footer-menu-item">
                  <FooterCategory  menuItem={item} onOpen={() => setIsModalOpen(true)}/>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="footer-copyright__inner">
              <h3 className="footer-copyright__title">
                {footerData?.copyright?.title}
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
