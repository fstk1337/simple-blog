import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Container } from "@layout/Container";

import style from "./Header.module.scss";
import burger from "@icons/burger.svg";
import close from "@icons/close.svg";
import { routes } from "@constants/routes";

export const Header = () => {
  const path = useLocation().pathname;
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerContent}>
          <a href="/" className={style.logo}>
            {path === '/' && <>C<span>oz</span>y S<span>pac</span>e<span className={style.dot}>.</span></>}
            {path !== '/' && <>Cozy Space<span className={style.dot}>.</span></>}
          </a>
          <nav className={style.navigation}>
            <div className={style.burger} onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
              <img src={showBurgerMenu ? close : burger} alt="=" />
            </div>
            {routes.map(link => 
              <Link key={link.id} to={link.to} className={style.navLink + (path === link.to ? ' ' + style.navLinkActive : '')}>{link.name}</Link>
            )}
          </nav>
          <div className={style.burgerMenu + (showBurgerMenu ? ' ' + style.show : '')}>
            <Container>
              <ul>
              {routes.map(link =>
                <li key={link.id} className={style.burgerItem}>
                  <Link to={link.to} onClick={() => setShowBurgerMenu(false)} className={style.burgerLink + (path === link.to ? ' ' + style.burgerLinkActive : '')}>{link.name}</Link>
                </li>
              )}
              </ul>
            </Container>
          </div>
        </div>
      </Container>
    </header>
  );
}
