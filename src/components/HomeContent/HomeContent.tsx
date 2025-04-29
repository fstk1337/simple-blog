import { Container } from '@layout/Container';
import { PostCard } from '@components/PostCard';
import { Sidebar } from '@components/Sidebar';

import style from './HomeContent.module.scss';

import { Link } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { postCardsApi } from '@app/api/post-cards';


export const HomeContent = () => {
  const query = useQuery({ queryKey: ['cards'], queryFn: postCardsApi.getPostCards});

  return (
    <section className={style.homeContent}>
      <Container>
        <div className={style.content}>
          <div className={style.mainColumn}>
            {query.data?.filter(card => card.published).map(card =>
              <PostCard key={card.id} card={card} isShort={true} />
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
