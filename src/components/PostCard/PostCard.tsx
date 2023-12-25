import { FC } from 'react';

import { PostDetails } from '@components/PostDetails';

import { PostCardProps } from './PostCardProps';
import style from './PostCard.module.scss';
import tagsIcon from '@icons/tags.svg';

export const PostCard:FC<PostCardProps> = ({ card }) => {
  const { topic, title, author, image, date, comments, description, tags } = card;

  return (
    <div className={style.postCard}>
      <div className={style.postImage}>
        <img src={image} alt='post-img' />
      </div>
      <div className={style.postInfo}>
        <div className={style.postText}>
          <div className={style.topic}>{topic}</div>
          <a href="#"><h3 className={style.title}>{title}</h3></a>
          <PostDetails author={author} date={date} comments={comments} />
        </div>
        <div className={style.postDescription}>
          <p>{description}</p>
        </div>
        <div className={style.postTags}>
          <img src={tagsIcon} alt='tags' />
          <a href="#">{tags[0]}</a>,&nbsp;
          <a href="#">{tags[1]}</a>
        </div>
      </div>
    </div>
  );
}
