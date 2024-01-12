import { Container } from '@layout/Container';
import { PostCard } from '@components/PostCard';
import { Sidebar } from '@components/Sidebar';

import { cards } from '@constants/cards';

import style from './BlogContent.module.scss';

export const BlogContent = () => {
  return (
    <section className={style.blogContent}>
      <Container>
        <div className={style.content}>
          <div className={style.mainColumn}>
            {cards.map(card =>
              <div key={card.id} className={style.cardWrapper}>
                <PostCard card={card} isShort={true} />
            </div>
            )}
          </div>
          <div className={style.sideColumn}>
            <Sidebar />
          </div>
        </div>
      </Container>
    </section>
  );
}
