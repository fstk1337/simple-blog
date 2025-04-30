import { FC } from 'react';

import { PostDetails } from '@components/PostDetails';

import { useQuery } from '@tanstack/react-query';
import { postCardsApi } from '@app/api/post-cards';
import { tagsApi } from '@app/api/tags';

import { PostCardProps } from './PostCardProps';
import style from './PostCard.module.scss';
import tagsIcon from '@icons/tags.svg';

import parse from 'html-react-parser';
import { formatDate } from '@utils/date-formatter';

const BASE_URL = 'http://localhost:3000';


export const PostCard:FC<PostCardProps> = ({ card }) => {
  const { id, title, content, image, createdAt } = card;
  const query = useQuery({ queryKey: ['onePost', id], queryFn: () => postCardsApi.getOnePostById(id)});
  const query2 = useQuery({ queryKey: ['allTags'], queryFn: tagsApi.getAllTags});

  return (
    <div className={style.postCard}>
      <div className={style.postImage}>
        <img src={`${BASE_URL}/${image}`} alt='post-img' />
      </div>
      <div className={style.postInfo}>
        <div className={style.postText}>
          <div className={style.topic}>{query.data?.category.name}</div>
          <a href="#"><h3 className={style.title}>{title}</h3></a>
          <PostDetails author={query.data?.author.name} date={formatDate(createdAt)} comments={query.data?.comments.length || 0} />
        </div>
        <div className={style.postDescription}>
          <div className={style.shortened}>{parse(content)}</div>
        </div>
        <div className={style.postTags}>
          {query.data?.tags.map(tag =>
          <div key={tag.tagId}>
            <img src={tagsIcon} alt='tag' />
            <a href="#">{query2.data?.find(t => t.id == tag.tagId).name}</a>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
