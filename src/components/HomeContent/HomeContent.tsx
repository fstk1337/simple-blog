import { Container } from '@layout/Container';
import { PostCard } from '@components/PostCard';
import { Sidebar } from '@components/Sidebar';

import style from './HomeContent.module.scss';

import { Link } from 'react-router-dom';

import { Card, cards } from '@constants/cards';
import { useQuery } from '@tanstack/react-query';


const getCards = () => {
  return new Promise<Card[]>(res => {
    setTimeout(() => {
      res(cards);
    }, 1000);
  });
}


export const HomeContent = () => {
  const query = useQuery({ queryKey: ['cards'], queryFn: getCards});

  return (
    <section className={style.homeContent}>
      <Container>
        <div className={style.content}>
          <div className={style.mainColumn}>
            {query.data?.map(card =>
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
