const BASE_URL = 'http://localhost:3000/api/v1';

export type TagDto = {
  id: number;
  name: string;
}

type PostTagged = {
  postId: number;
  tagId: number;
  assignedAt: string;
  assigneeId: number;
}

export type TagDtoDetailed = {
  id: number;
  name: string;
  posts: PostTagged[];
}

export const tagsApi = {
  getAllTags: async() => {
    return fetch(`${BASE_URL}/tags`).then(res => res.json() as Promise<TagDto[]>);
  },
  getTagById: async(id: number) => {
    return fetch(`${BASE_URL}/tags/${id}`).then(res => res.json() as Promise<TagDtoDetailed>);
  }
}
