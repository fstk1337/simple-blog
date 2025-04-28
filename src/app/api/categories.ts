const BASE_URL = 'http://localhost:3000/api/v1';

export type CategoryDto = {
  id: number;
  name: string;
}

export const categoriesApi = {
  getCategoryById: async(id: number) => {
    return await fetch(`${BASE_URL}/categories/${id}`).then(res => res.json() as Promise<CategoryDto>);
  }
}

