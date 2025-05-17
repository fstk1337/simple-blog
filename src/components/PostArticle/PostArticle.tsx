import { FC } from 'react';
import style from './PostArticle.module.scss';
import { PostArticleProps } from './PostArticleProps';
import { useQuery } from '@tanstack/react-query';
import { tagsApi } from '@app/api/tags';
import { imagesApi } from '@app/api/images';
import { Link } from 'react-router-dom';
import { PostDetails } from '@components/PostDetails';
import { formatDate } from '@utils/date-formatter';
import tagsIcon from '@icons/tags.svg';
import parse from 'html-react-parser';

export const PostArticle:FC<PostArticleProps> = ({ post }) => {
  const { id, title, content, image, createdAt } = post;
  const { data: tags } = useQuery({ queryKey: ['allTags'], queryFn: tagsApi.getAllTags});
  const { data: imageData } = useQuery({ queryKey: ['image', image], queryFn: () => imagesApi.getImage(image, 'post-img')});

  return (
    <div className={style.postCard}>
      <div className={style.postImage}>
        {imageData}
      </div>
      <div className={style.postInfo}>
        <div className={style.postText}>
          {post.category && <div className={style.topic}>{post.category.name}</div>}
          <Link to={`/blog/${id}`}><h3 className={style.title}>{title}</h3></Link>
          {post.author && <PostDetails author={post.author.name} date={formatDate(createdAt)} comments={post.comments.length || 0} />}
        </div>
        <div className={style.postContent}>
          {post.content && <div>{parse(content)}</div>}
        </div>
        <div className={style.cardFooter}>
          <div className={style.postTags}>
            {post.tags && post.tags.map(tag =>
            <div key={tag.tagId}>
              <img src={tagsIcon} alt='tag' />
              <Link to={`/blog/tag/${tag.tagId}`}>{tags?.find(t => t.id === tag.tagId)?.name}</Link>
            </div>
            )}
            </div>
        </div>
      </div>
    </div>
  );
}
