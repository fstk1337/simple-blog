import { FC } from 'react';

import { PostSlideProps } from './PostSlideProps';
import style from './PostSlide.module.scss';

export const PostSlide:FC<PostSlideProps> = ({ post }) => {
  const { topic, title, author, date, image, comments } = post;

  return (
    <div className={style.postSlide}>
      <img className={style.postImage} src={image} alt='post-img' />
      <div className={style.postText}>
        <div className={style.topic}>{topic}</div>
        <h3 className={style.title}>{title}</h3>
        <div className={style.postInfo}>
          <span>{author}&nbsp;</span>|<span>&nbsp;{date}&nbsp;</span>|<span>&nbsp;{comments} Comments</span>
        </div>
      </div>
    </div>
  );
}
