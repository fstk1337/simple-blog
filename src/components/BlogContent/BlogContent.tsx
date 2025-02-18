import { Container } from '@layout/Container';
import { PostCard } from '@components/PostCard';
import { Sidebar } from '@components/Sidebar';

import { cards } from '@constants/cards';

import style from './BlogContent.module.scss';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';


export const BlogContent = () => {
  const [page, setPage] = useState(0);
  const [posts] = useState(cards);
  const postsPerPage = 6;
  const totalPages = Math.ceil(cards.length / postsPerPage);

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
