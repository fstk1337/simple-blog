import { Link, useLocation } from "react-router-dom";

import { Container } from "@layout/Container";

import style from './Header.module.scss';

export const Header = () => {
  const path = useLocation().pathname;

  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerContent}>
          <a href="/" className={style.logo}>Leet Hub<span>.</span></a>
          <nav className={style.navigation}>
            <Link to="/" className={style.navLink + (path === '/' ? ' ' + style.navLinkActive : '')}>Home</Link>
            <Link to="/about" className={style.navLink + (path === '/about' ? ' ' + style.navLinkActive : '')}>About Us</Link>
            <Link to="/blog" className={style.navLink + (path === '/blog' ? ' ' + style.navLinkActive : '')}>Blog Entries</Link>
            <Link to="/post" className={style.navLink + (path === '/post' ? ' ' + style.navLinkActive : '')}>Post Details</Link>
            <Link to="/contact" className={style.navLink + (path === '/contact' ? ' ' + style.navLinkActive : '')}>Contact Us</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
