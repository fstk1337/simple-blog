import { PostSlide } from '@components/PostSlide';

import style from './PostSlider.module.scss';

import { posts } from '@/constants/posts';

export const PostSlider = () => {
  return (
    <div className={style.postSlider}>
      <div className={style.content}>
        {posts.map(post => 
          <PostSlide post={post} />
        )}
      </div>
    </div>
  );
}
