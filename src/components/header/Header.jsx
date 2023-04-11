import "./header.scss";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="menu__wrapper">
          <a href="/" className="logo">
            DubaiRealty <span className="logo__subtitle">Real Estate</span>
          </a>
          <div className="menu__right">
            <nav className="menu">
              <ul class="menu__list">
                <li class="menu__list-item">
                  <NavLink className="menu__link" to="/">
                    Buy
                  </NavLink>
                </li>
                <li class="menu__list-item">
                  <NavLink className="menu__link" to="/about">
                    Blog
                  </NavLink>
                </li>
                <li class="menu__list-item">
                  <NavLink className="menu__link" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="menu__list-item">
                  <NavLink className="menu__link" to="/about">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="menu__right-options">
              <Button>Book a consultation</Button>
              <div className="menu__languages">
                <a className="menu__language menu__language--active" href="/">
                  en
                </a>
                <a className="menu__language" href="/">
                  ua
                </a>
              </div>
              <a class="menu__phone" href="tel:%2B30991111111">
                +3 (099) 111-11-11
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
