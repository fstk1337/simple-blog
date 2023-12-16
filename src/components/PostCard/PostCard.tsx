import { FC } from 'react';

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
          <h3 className={style.title}>{title}</h3>
          <div className={style.postDetails}>
            <span>{author}&nbsp;</span>|<span>&nbsp;{date}&nbsp;</span>|<span>&nbsp;{comments} Comments</span>
          </div>
        </div>
        <div className={style.postDescription}>
          <p>{description}</p>
        </div>
        <div className={style.postTags}>
          <img src={tagsIcon} alt='tags' />
          {tags[0]}, {tags[1]}
        </div>
      </div>
    </div>
  );
}
