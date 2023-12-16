import post1 from '@images/blog-post-01.jpg';
import post2 from '@images/blog-post-02.jpg';
import post3 from '@images/blog-post-03.jpg';

export interface Card {
  id: number;
  topic: string;
  title: string;
  author: string;
  date: string;
  image: string;
  comments: number;
  description: string;
  tags: Array<string>;
}

export const cards: Card[] = [
  {
    id: 1,
    topic: 'lifestyle',
    title: 'Best Template Website for HTML CSS',
    author: 'Admin',
    date: 'May 31, 2020',
    image: post1,
    comments: 12,
    description: 'Stand Blog is a free HTML CSS template for your CMS theme. You can easily adapt or customize it for any kind of CMS or website builder. You are allowed to use it for your business. You are NOT allowed to re-distribute the template ZIP file on any template collection site for the download purpose. Contact TemplateMo for more info. Thank you.',
    tags: ['Beauty', 'Nature']
  },
  {
    id: 2,
    topic: 'healthy',
    title: 'Etiam id diam vitae lorem dictum',
    author: 'Admin',
    date: 'May 24, 2020',
    image: post2,
    comments: 36,
    description: 'You can support us by contributing a little via PayPal. Please contact TemplateMo via Live Chat or Email. If you have any question or feedback about this template, feel free to talk to us. Also, you may check other CSS templates such as multi-page, resume, video, etc.',
    tags: ['Best Templates', 'TemplateMo']
  },
  {
    id: 3,
    topic: 'fashion',
    title: 'Donec tincidunt leo nec magna',
    author: 'Admin',
    date: 'May 14, 2020',
    image: post3,
    comments: 48,
    description: 'Nullam at quam ut lacus aliquam tempor vel sed ipsum. Donec pellentesque tincidunt imperdiet. Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet, feugiat viverra leo. Phasellus interdum, diam commodo egestas rhoncus, turpis nisi consectetur nibh, in vehicula eros orci vel neque.',
    tags: ['HMTL CSS', 'Photoshop']
  }
];
