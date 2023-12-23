import { Container } from '@layout/Container';
import { PostCard } from '@components/PostCard';

import style from './HomeContent.module.scss';

import { cards } from '@constants/cards';
import { sidebarPosts as posts } from '@constants/sidebarPosts';
import { sidebarCategories as categories } from '@constants/sidebarCategories';
import { sidebarTags as tags } from '@constants/sidebarTags';

export const HomeContent = () => {
  return (
    <section className={style.homeContent}>
      <Container>
        <div className={style.content}>
          <div className={style.mainColumn}>
            {cards.map(card =>
              <PostCard key={card.id} card={card} />
            )}
            <button type="button" className={style.viewPostsBtn}>View all posts</button>
          </div>
          <div className={style.sideColumn}>
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
                        <h4 className={style.postHeading}>{post.heading}</h4>
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
                        <button type='button' className={style.sidebarTagBtn}>{tag.name}</button>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
