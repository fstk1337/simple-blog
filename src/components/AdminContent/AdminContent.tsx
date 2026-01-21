import { Container } from '@layout/Container';

import style from './AdminContent.module.scss';

export const AdminContent = () => {
  return (
    <section className={style.adminContent}>
      <Container>
        <div className={style.content}>
          <div className={style.main}>
            ADMIN HERE
          </div>
        </div>
      </Container>
    </section>
  );
};
