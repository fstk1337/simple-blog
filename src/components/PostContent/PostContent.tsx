import { Container } from '@layout/Container';
import { Sidebar } from '@components/Sidebar';

import style from './PostContent.module.scss';

export const PostContent = () => {
  return (
    <section className={style.postContent}>
      <Container>
        <div className={style.content}>
          <div className={style.mainColumn}>
            Main Column
          </div>
          <div className={style.sideColumn}>
            <Sidebar />
          </div>
        </div>
      </Container>
    </section>
  );
}
