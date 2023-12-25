import { FC } from 'react';

import { PostDetails } from '@components/PostDetails';
import { PostSlideProps } from './PostSlideProps';
import style from './PostSlide.module.scss';

export const PostSlide:FC<PostSlideProps> = ({ slide }) => {
  const { topic, title, author, date, image, comments } = slide;

  return (
    <div className={style.postSlide}>
      <img className={style.postImage} src={image} alt='post-img' />
      <div className={style.postText}>
        <div className={style.topic}>{topic}</div>
        <a href="#"><h3 className={style.title}>{title}</h3></a>
        <PostDetails author={author} date={date} comments={comments} />
      </div>
    </div>
  );
}
