import { categoriesApi } from '@app/api/categories';
import { tagsApi } from '@app/api/tags';
import { postCardsApi } from '@app/api/post-cards';
import { useQuery } from '@tanstack/react-query';

import { formatDate } from '@utils/date-formatter';

import style from './Sidebar.module.scss';

export const Sidebar = () => {
  const categories = useQuery({ queryKey: ['categories', 'all'], queryFn: categoriesApi.getAllCategories});
  const tags = useQuery({ queryKey: ['tags', 'all'], queryFn: tagsApi.getAllTags});
  const posts = useQuery({ queryKey: ['posts', 'all'], queryFn: postCardsApi.getPostCards});

  return (
    <div className={style.sidebar}>
      <form className={style.sidebarSearch}>
        <input type="search" placeholder='type to search...' disabled />
      </form>
      <div className={style.sidebarItem}>
        <div className={style.sidebarHeading}>
          <h3>Recent posts</h3>
        </div>
        <div className={style.sidebarContent}>
          <ul className={style.sidebarPostList}>
            {posts.data?.filter(post => post.published).sort((a, b) => a.createdAt < b.createdAt).slice(0, 3).map(post =>
              <li key={post.id} className={style.sidebarPostItem}>
                <a href="#"><h4 className={style.postHeading}>{post.title}</h4></a>
                <div className={style.postDate}>{formatDate(post.createdAt)}</div>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className={style.sidebarItem}>
        <div className={style.sidebarHeading}>
          <h3>Categories</h3>
        </div>
        <div className={style.sidebarContent}>
          <ul className={style.sidebarCategoryList}>
            {categories.data?.slice(0, 5).map(category =>
              <li key={category.id} className={style.sidebarCategoryItem}>
                <a href={'#'}>- {category.name}</a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className={style.sidebarItem}>
        <div className={style.sidebarHeading}>
          <h3>Tag clouds</h3>
        </div>
        <div className={style.sidebarContent}>
          <ul className={style.sidebarTagList}>
            {tags.data?.map(tag =>
              <li key={tag.id} className={style.sidebarTagItem}>
                <a href='#' className={style.sidebarTagBtn}>{tag.name}</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
