const BASE_URL = 'http://localhost:3000/api/v1';

export type TagDto = {
  id: number;
  name: string;
}

export const apiTags = {
  getAllTags: async() => {
    return await fetch(`${BASE_URL}/tags`).then(res => res.json() as Promise<TagDto[]>);
  }
}

