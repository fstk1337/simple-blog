import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Container } from "@layout/Container";

import style from "./Header.module.scss";
import burger from "@icons/burger.svg";
import { links } from "@/constants/links";

export const Header = () => {
  const path = useLocation().pathname;
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerContent}>
          <a href="/" className={style.logo}>Leet Hub<span>.</span></a>
          <nav className={style.navigation}>
            <div className={style.burger} onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
              <img src={burger} alt="=" />
            </div>
            {links.map(link => 
              <Link key={link.id} to={link.to} className={style.navLink + (path === link.to ? ' ' + style.navLinkActive : '')}>{link.name}</Link>
            )}
          </nav>
          <ul className={style.burgerMenu + (showBurgerMenu ? ' ' + style.show : '')}>
          {links.map(link =>
            <li key={link.id} className={style.burgerItem}>
              <Link to={link.to} onClick={() => setShowBurgerMenu(false)} className={style.burgerLink + (path === link.to ? ' ' + style.burgerLinkActive : '')}>{link.name}</Link>
            </li>
          )}
          </ul>
        </div>
      </Container>
    </header>
  );
}
