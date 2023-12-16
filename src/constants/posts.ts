import post1 from '@images/banner-item-01.jpg';
import post2 from '@images/banner-item-02.jpg';
import post3 from '@images/banner-item-03.jpg';
import post4 from '@images/banner-item-04.jpg';
import post5 from '@images/banner-item-05.jpg';
import post6 from '@images/banner-item-06.jpg';

export interface Post {
  id: number;
  topic: string;
  title: string;
  author: string;
  date: string;
  image: string;
  comments: number;
}

export const posts:Post[] = [
  {
    id: 1,
    topic: 'fashion',
    title: 'Morbi Dapibus Condimentum',
    author: 'Admin',
    date: 'May 12, 2020',
    image: post1,
    comments: 12
  },
  {
    id: 2,
    topic: 'nature',
    title: 'Donec Porttitor Augue At Velit',
    author: 'Admin',
    date: 'May 14, 2020',
    image: post2,
    comments: 24
  },
  {
    id: 3,
    topic: 'lifestyle',
    title: 'Best HTML Templates On TemplateMo',
    author: 'Admin',
    date: 'May 16, 2020',
    image: post3,
    comments: 36
  },
  {
    id: 4,
    topic: 'fashion',
    title: 'Responsive And Mobile Ready Layouts',
    author: 'Admin',
    date: 'May 18, 2020',
    image: post4,
    comments: 48
  },
  {
    id: 5,
    topic: 'nature',
    title: 'Cras Congue Sed Augue Id Ullamcorper',
    author: 'Admin',
    date: 'May 24, 2020',
    image: post5,
    comments: 64
  },
  {
    id: 6,
    topic: 'lifestyle',
    title: 'Suspendisse Nec Aliquet Ligula',
    author: 'Admin',
    date: 'May 26, 2020',
    image: post6,
    comments: 72
  }
];
