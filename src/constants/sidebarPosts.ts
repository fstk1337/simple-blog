export interface SidebarPost {
  id: number;
  heading: string;
  date: string;
}

export const sidebarPosts: SidebarPost[] = [
  {
    id: 1,
    heading: 'Vestibulum id turpis porttitor sapien facilisis scelerisque',
    date: 'May 31, 2020'
  },
  {
    id: 2,
    heading: 'Suspendisse et metus nec libero ultrices varius eget in risus',
    date: 'May 28, 2020'
  },
  {
    id: 3,
    heading: 'Swag hella echo park leggings, shaman cornhole ethical coloring',
    date: 'May 14, 2020'
  }
];
