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
            <button type="button" className={style.viewPostsBtn}>View all posts</button>
          </div>
          <div className={style.sideColumn}>
            <div className={style.sidebar}>
              <div className={style.sidebarSearch}>
                <input type="search" placeholder='type to search...' />
              </div>
              <div className={style.sidebarItem}>
                <div className={style.sidebarHeading}>Recent posts</div>
                <div className={style.sidebarContent}>Content recent posts</div>
              </div>
              <div className={style.sidebarItem}>
                <div className={style.sidebarHeading}>Categories</div>
                <div className={style.sidebarContent}>Content categories</div>
              </div>
              <div className={style.sidebarItem}>
                <div className={style.sidebarHeading}>Tag clouds</div>
                <div className={style.sidebarContent}>Content tag clouds</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
