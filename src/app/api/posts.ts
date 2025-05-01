import { CategoryDto } from "./categories";

const BASE_URL = 'http://localhost:3000/api/v1';

export type PostDto = {
  id: number;
  authorId: number;
  categoryId: number;
  title: string;
  content: string;
  image: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

type TagDto = {
  postId: number;
  tagId: number;
  assignedAt: string;
  assigneeId: number;
}

type CommentDto = {
  id:  number;
  postId: number;
  authorId: number;
  text: string;
  createdAt: string;
  updatedAt: string;
}

enum ROLE {
  'ADMIN', 'USER'
}

type UserDto = {
  id: number;
  email: string;
  name: string;
  age: number;
  role: ROLE;
  image: string | null;
}

export type PostDtoDetailed = PostDto & {
  category: CategoryDto;
  tags: TagDto[];
  comments: CommentDto[];
  author: UserDto;
}

export const postsApi = {
  getAllPosts: async() => {
    return fetch(`${BASE_URL}/posts`).then(res => res.json() as Promise<PostDto[]>);
  },
  getPostById: async(id: number) => {
    return fetch(`${BASE_URL}/posts/${id}`).then(res => res.json() as Promise<PostDtoDetailed>);
  }
}
