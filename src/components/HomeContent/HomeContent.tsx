import { Container } from '@layout/Container';
import { PostCard } from '@components/PostCard';
import { Sidebar } from '@components/Sidebar';

import style from './HomeContent.module.scss';

import { Link } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { postsApi } from '@app/api/posts';


export const HomeContent = () => {
  const posts = useQuery({ queryKey: ['posts', 'all'], queryFn: postsApi.getAllPosts});

  return (
    <section className={style.homeContent}>
      <Container>
        <div className={style.content}>
          <div className={style.mainColumn}>
            {posts.data?.filter(card => card.published).slice(0, 3).map(card =>
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
