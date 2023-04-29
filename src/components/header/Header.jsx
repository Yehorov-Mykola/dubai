import "./header.scss";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import useOutsideClick from "../../assets/hooks/useOutsideClick";
import i18n from "./../../_i18n/_i18n";
import { useTranslation } from "react-i18next";
import axios from "axios";

function Header() {
  const [data, setData] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isShowSubmenu, setIsShowSubmenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuData = data.header?.menu;
  const logoData = data.header?.logo;
  const buttonData = data.header?.button;
  const phoneData = data.header?.phone;
  const langData = data.header?.lang;
  const submenuData = data.header?.submenu;
  const submenuBtnData = data.header?.submenuBtn;

  useEffect(() => {
    axios
      .get("/localization/en.json")
      .then(function (response) {
        setData(response.data);
      })
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  function changeLanguageOnClick(language) {
    i18n.changeLanguage(language);
  }

  const [t] = useTranslation(["translation", "customFile"]);


  return (
    <>
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <NavLink to={logoData?.href} className="logo">
            {logoData?.title}{" "}
            <span className="logo__subtitle">{logoData?.subtitle}</span>
          </NavLink>
          <div className="header__right">
            <nav className="menu">
              <button
                class={`menu__btn menu__btn${isOpen ? "--active" : ""}`}
                onClick={toggleDropdown}
              >
                <span class="menu__btn-line"></span>
              </button>

              <ul class={`menu__list ${isOpen ? "menu__list--open" : ""}`}>
                <li class="menu__list-item ">
                  <button
                    class={`menu__link menu__link-btn ${
                      isShowSubmenu ? "menu__link-btn--active" : ""
                    }`}
                    onClick={() => setIsShowSubmenu((prev) => !prev)}
                  >
                    {t("customFile:title")}
                  </button>
                  {isShowSubmenu && (
                    <ul className="submenu">
                      {submenuData?.map((item, index) => (
                        <li class="submenu__item">
                          <NavLink key={index.id} className="submenu__link" to={item.href}>
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                {menuData?.map((item, index) => (
                  <li key={index.id} class="menu__list-item">
                    <NavLink className="menu__link" to={item.href}>
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="header__right-options">
              <Button onClick={() => setIsModalOpen(true)}>
                {buttonData}
              </Button>
              <div className="menu__languages">
                {langData?.map((item, index) => (
                  <button key={index} className="menu__language" onClick={() => changeLanguageOnClick(item.btn)}>
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

    {isModalOpen && 
        <Modal 
          className={isModalOpen ? 'open' : 'close'}
          onClose={() => setIsModalOpen(false)} 
        />
      }
    </>
    
  );
}

export default Header;
