import "./header.scss";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import useOutsideClick from "../../assets/hooks/useOutsideClick";
import i18n from "./../../_i18n/_i18n";
import { useTranslation } from "react-i18next";
import { CSSTransition } from "react-transition-group";
import { useMedia } from "use-media";
import axios from "axios";

function Header() {
  const [data, setData] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isShowSubmenu, setIsShowSubmenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("en");
  const isDesktop = useMedia({ maxWidth: "1024px" });

  const logoData = data.header?.logo;
  const phoneData = data.header?.phone;
  const langData = data.header?.lang;

  useEffect(() => {
    axios.get("/locales/en/translation.json").then(function (response) {
      setData(response.data);
    });
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const { ref } = useOutsideClick(() => setIsShowSubmenu(false));
  //виправив як в прикладі

  const [t] = useTranslation(["translation"]);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <NavLink
              to={logoData?.href}
              className="logo"
              onClick={isDesktop && toggleDropdown}
            >
              {logoData?.title}{" "}
              <span className="logo__subtitle">{logoData?.subtitle}</span>
            </NavLink>
            <div className="header__right">
              <nav className="menu">
                <button
                  className={`menu__btn menu__btn${isOpen ? "--active" : ""}`}
                  onClick={() => setIsOpen(!isOpen)}
                  //лишив, як було. Бо це не так кнопка (гамбургер моб меню/хрестиик його закриття)
                >
                  <span className="menu__btn-line"></span>
                </button>

                <ul
                  ref={ref}
                  //виправив як в прикладі
                  className={`menu__list ${isOpen ? "menu__list--open" : ""}`}
                >
                  <li className="menu__list-item">
                    <button
                      className={`menu__link menu__link-btn ${
                        isShowSubmenu ? "menu__link-btn--active" : ""
                      }`}
                      //тут стилі не прибирав
                      onClick={() => setIsShowSubmenu((prev) => !prev)}
                    >
                      {t("header.submenuBtn")}
                    </button>
                    {isShowSubmenu && (
                      <ul className="submenu">
                        {t("header.submenu", { returnObjects: true }).map(
                          (item, index) => (
                            <li className="submenu__item" key={index}>
                              <NavLink className="submenu__link" to={item.href} onClick={isDesktop && toggleDropdown}>
                                {item.title} 
                              </NavLink>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </li>
                  {t("header.menu", { returnObjects: true }).map(
                    (item, index) => (
                      <li className="menu__list-item" key={index}>
                        <NavLink
                          className="menu__link"
                          to={item.href}
                          onClick={isDesktop && toggleDropdown}
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    )
                  )}
                  <li className="menu__list-item menu__list-item--mobile">
                    <Button onClick={() => setIsModalOpen(true)}>
                      {t("header.button")}
                    </Button>
                    <NavLink
                      className="menu__phone menu__phone--mobile"
                      to={phoneData?.href}
                    >
                      {phoneData?.title}
                    </NavLink>
                    <div className="menu__languages menu__languages--mobile">
                      {langData?.map((item, index) => (
                        <button
                          key={index}
                          className={`menu__language ${
                            activeItem === item.title
                              ? "menu__language--active"
                              : ""
                          }`}
                          href={item.href}
                          onClick={() => {
                            i18n.changeLanguage(item.btn);
                            setActiveItem(item.title);
                          }}
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="header__right-options">
                <Button header onClick={() => setIsModalOpen(true)}>
                  {t("header.button")}
                </Button>
                <div className="menu__languages">
                  {langData?.map((item, index) => (
                    <button
                      key={index}
                      className={`menu__language ${
                        activeItem === item.title
                          ? "menu__language--active"
                          : ""
                      }`}
                      href={item.href}
                      onClick={() => {
                        i18n.changeLanguage(item.btn);
                        setActiveItem(item.title);
                      }}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
                <NavLink className="menu__phone" to={phoneData?.href}>
                  {phoneData?.title}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      <CSSTransition
        in={isModalOpen}
        timeout={200}
        classNames="modal"
        unmountOnExit
      >
        <Modal
          //className={isModalOpen ? "open" : "close"}
          onClose={() => setIsModalOpen(false)}
        />
      </CSSTransition>
    </>
  );
}

export default Header;
