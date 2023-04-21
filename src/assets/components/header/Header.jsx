import "./header.scss";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import axios from "axios";

function Header() {
  const [data, setData] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShow, setIsShow] = useState(false);

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

  return (
    <>
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href={logoData?.href} className="logo">
            {logoData?.title}{" "}
            <span className="logo__subtitle">{logoData?.subtitle}</span>
          </a>
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
                      isShow ? "menu__link-btn--active" : ""
                    }`}
                    onClick={() => setIsShow((prev) => !prev)}
                  >
                    {submenuBtnData}
                  </button>
                  {isShow && (
                    <ul className="submenu">
                      {submenuData?.map((i) => (
                        <li class="submenu__item">
                          <NavLink className="submenu__link" to={i.href}>
                            {i.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                {menuData?.map((i) => (
                  <li class="menu__list-item">
                    <NavLink className="menu__link" to={i.href}>
                      {i.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="header__right-options">
              <Button onClick={() => setIsShowModal((prev) => !prev)}>
                {buttonData}
              </Button>
              <div className="menu__languages">
                {langData?.map((i) => (
                  <a className="menu__language" href={i.href}>
                    {i.title}
                  </a>
                ))}
              </div>
              <a class="menu__phone" href={phoneData?.href}>
                {phoneData?.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {isShowModal && ( <Modal /> )}
    </>
    
  );
}

export default Header;
