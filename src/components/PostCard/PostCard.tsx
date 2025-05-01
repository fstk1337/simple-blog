import { FC } from 'react';

import { PostDetails } from '@components/PostDetails';

import { useQuery } from '@tanstack/react-query';
import { postsApi } from '@app/api/posts';
import { tagsApi } from '@app/api/tags';
import { imagesApi } from '@app/api/images';

import { PostCardProps } from './PostCardProps';
import style from './PostCard.module.scss';
import tagsIcon from '@icons/tags.svg';

import parse from 'html-react-parser';
import { formatDate } from '@utils/date-formatter';


export const PostCard:FC<PostCardProps> = ({ card, isShort }) => {
  const { id, title, content, image, createdAt } = card;
  const { data: post } = useQuery({ queryKey: ['onePost', id], queryFn: () => postsApi.getPostById(id)});
  const { data: tags } = useQuery({ queryKey: ['allTags'], queryFn: tagsApi.getAllTags});
  const { data: imageData } = useQuery({ queryKey: ['image', image], queryFn: () => imagesApi.getImage(image, 'post-img')});

  return (
    <div className={style.postCard}>
      <div className={style.postImage}>
        {imageData}
      </div>
      <div className={style.postInfo}>
        <div className={style.postText}>
          <div className={style.topic}>{post?.category.name}</div>
          <a href="#"><h3 className={style.title}>{title}</h3></a>
          <PostDetails author={post?.author.name} date={formatDate(createdAt)} comments={post?.comments.length || 0} />
        </div>
        <div className={style.postDescription}>
          <div className={isShort ? style.shortened : ''}>{parse(content)}</div>
        </div>
        <div className={style.postTags}>
          {post?.tags.map(tag =>
          <div key={tag.tagId}>
            <img src={tagsIcon} alt='tag' />
            <a href="#">{tags?.find(t => t.id == tag.tagId)?.name}</a>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
