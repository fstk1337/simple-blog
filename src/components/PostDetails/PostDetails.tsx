import { FC } from 'react';

import { PostDetailsProps } from './PostDetailsProps';
import style from './PostDetails.module.scss';

export const PostDetails:FC<PostDetailsProps> = ({ author, date }) => {
  return (
    <div className={style.postDetails}>
      <div className={style.author}>
        <a href="#">{author}</a>
      </div>
      <div className={style.date}>
        <a href="#">{date}</a>
      </div>
      {/* <div className={style.comments}>
        <a href="#">{comments} Comments</a>
      </div> */}
    </div>
  );
}
