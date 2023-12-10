import { Container } from "@layout/Container";

import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        This is header
      </Container>
    </header>
  );
}
