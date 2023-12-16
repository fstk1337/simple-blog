import { Container } from '@layout/Container';

import style from './HomeContent.module.scss';
import { PostCard } from '../PostCard';
import { cards } from '@constants/cards';

export const HomeContent = () => {
  return (
    <section className={style.homeContent}>
      <Container>
        <div className={style.content}>
          <div className={style.mainColumn}>
            {cards.map(card =>
              <PostCard key={card.id} card={card} />
            )}
          </div>
          <div className={style.sideColumn}>
            Side Column
          </div>
        </div>
      </Container>
    </section>
  );
}
