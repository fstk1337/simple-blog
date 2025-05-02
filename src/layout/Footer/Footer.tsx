import { Container } from "@layout/Container";

import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.content}>
          <div className={style.copyright}>
            <span>2025&nbsp;</span>
            <span>Made by&nbsp;<a href="mailto:vit.shvaichuk@gmail.com">@fstk1337</a></span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
