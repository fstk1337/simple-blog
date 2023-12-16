import { Container } from "@layout/Container";

import style from "./Footer.module.scss";
import { socials } from "@constants/socials";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.content}>
          <div className={style.socials}>
            <ul className={style.socialList}>
              {socials.map(link =>
                <li key={link.id} className={style.socialItem}>
                  <a href={link.href} target="_blank">{link.name}</a>
                </li>
              )}
            </ul>
          </div>
          <div className={style.copyright}>
            <span>Copyright 2023 Leet Hub.&nbsp;</span>
            <span>Made by&nbsp;<a href="mailto:vit.shvaichuk@gmail.com">@fstk1337</a></span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
