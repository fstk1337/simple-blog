import { sidebarPosts as posts } from '@constants/sidebarPosts';
import { sidebarCategories as categories } from '@constants/sidebarCategories';
import { sidebarTags as tags } from '@constants/sidebarTags';

import style from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <form className={style.sidebarSearch}>
        <input type="search" placeholder='type to search...' />
      </form>
      <div className={style.sidebarItem}>
        <div className={style.sidebarHeading}>
          <h3>Recent posts</h3>
        </div>
        <div className={style.sidebarContent}>
          <ul className={style.sidebarPostList}>
            {posts.map(post =>
              <li key={post.id} className={style.sidebarPostItem}>
                <a href="#"><h4 className={style.postHeading}>{post.heading}</h4></a>
                <div className={style.postDate}>{post.date}</div>
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
            {categories.map(category =>
              <li key={category.id} className={style.sidebarCategoryItem}>
                <a href={category.href}>- {category.name}</a>
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
            {tags.map(tag =>
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
