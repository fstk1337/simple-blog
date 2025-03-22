import { Container } from "@layout/Container";

import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.content}>
          {/* <div className={style.socials}>
            <ul className={style.socialList}>
              {socials.map(link =>
                <li key={link.id} className={style.socialItem}>
                  <a href={link.href} target="_blank">{link.name}</a>
                </li>
              )}
            </ul>
          </div> */}
          <div className={style.copyright}>
            <span>Copyright 2025 Cozy Space.&nbsp;</span>
            <span>Made by&nbsp;<a href="mailto:vit.shvaichuk@gmail.com">@fstk1337</a></span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
