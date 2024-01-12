import { Container } from '@layout/Container';
import { PostCard } from '@components/PostCard';
import { Sidebar } from '@components/Sidebar';

import style from './HomeContent.module.scss';

import { Link } from 'react-router-dom';

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
            <Link to="/blog" className={style.viewPostsBtn}>View all posts</Link>
          </div>
          <div className={style.sideColumn}>
            <Sidebar />
          </div>
        </div>
      </Container>
    </section>
  );
}
