import { Container } from '@layout/Container';
import { Sidebar } from '@components/Sidebar';

import style from './PostContent.module.scss';
import { FC } from 'react';
import { PostContentProps } from './PostContentProps';
import { PostArticle } from '@components/PostArticle';
import { postsApi } from '@app/api/posts';
import { useQuery } from '@tanstack/react-query';

export const PostContent:FC<PostContentProps> = ({ id }) => {
  const postQuery = useQuery({ queryKey: ['posts', id], queryFn: () => postsApi.getPostById(id) });

  return (
    <section className={style.postContent}>
      <Container>
        <div className={style.content}>
          <div className={style.mainColumn}>
            {postQuery.data && <PostArticle post={postQuery.data} />}
          </div>
          <div className={style.sideColumn}>
            <Sidebar />
          </div>
        </div>
      </Container>
    </section>
  );
}
