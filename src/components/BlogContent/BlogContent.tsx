import { Container } from '@layout/Container';
import { PostCard } from '@components/PostCard';
import { Sidebar } from '@components/Sidebar';

import style from './BlogContent.module.scss';
import { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { useQuery } from '@tanstack/react-query';
import { postsApi } from '@app/api/posts';
import { BlogContentProps } from './BlogContentProps';
import { categoriesApi } from '@app/api/categories';
import { tagsApi } from '@app/api/tags';
import { Link } from 'react-router-dom';


export const BlogContent:FC<BlogContentProps> = ({ category, tag }) => {
  const allPosts = useQuery({ queryKey: ['posts', 'all'], queryFn: postsApi.getAllPosts });
  const [page, setPage] = useState(0);

  let posts = allPosts.data?.filter(card => card.published) || [];
  let heading = 'All posts';
  if (category) {
    const oneCategory = useQuery({ queryKey: ['categories', category], queryFn: () => categoriesApi.getCategoryById(category)});
    posts = posts.filter(post => post.categoryId === category);
    if (posts.length > 0) {
      const categoryName = oneCategory.data?.name;
      heading = `<${categoryName}> category posts only`;
    }
  } else if (tag) {
    const oneTag = useQuery({ queryKey: ['tags', tag], queryFn: () => tagsApi.getTagById(tag)});
    const postIds = oneTag.data?.posts.map(post => post.postId) || [];
    posts = posts.filter(post => postIds.includes(post.id));
    if (posts.length > 0) {
      const tagName = oneTag.data?.name;
      heading = `<${tagName}> tag posts only`;
    }
  }

  const postsPerPage = 6;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const displayPosts = posts.slice(
    page * postsPerPage,
    page * postsPerPage + postsPerPage
  ).map(post => {
    return (
      <div key={post.id} className={style.cardWrapper}>
        <PostCard card={post} isShort={true} />
      </div>
    );
  });

  const changePage = (obj: { selected: number;}) => {
    setPage(obj.selected);
  };

  return (
    <section className={style.blogContent}>
      <Container>
        <div className={style.content}>
          <div className={style.mainColumn}>
            <div className={style.blogHeading}>
              <h3>{heading}</h3>
              {(category || tag) && <Link to='/blog'>Show all</Link>}
            </div>
            <div className={style.posts}>{displayPosts}</div>
            <div className={style.pagination}>
              <ReactPaginate
                pageCount={totalPages}
                previousLabel={"Previous"}
                nextLabel={"Next"}
                onPageChange={changePage}
                containerClassName={style.paginationBtns}
                previousLinkClassName={"prevBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"navDisabled"}
                activeClassName={"navActive"}
              />
            </div>
          </div>
          <div className={style.sideColumn}>
            <Sidebar />
          </div>
        </div>
      </Container>
    </section>
  );
}
