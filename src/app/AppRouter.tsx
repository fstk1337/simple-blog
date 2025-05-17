import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { Layout } from "@layout/Layout";
import { BlogPage, HomePage, AboutPage, PostPage } from "@pages";


export const AppRouter = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="blog">
        <Route index element={<BlogPage />} />
        <Route path="category/:categoryId" element={<BlogPage />} />
        <Route path="tag/:tagId" element={<BlogPage />} />
        <Route path=":id" element={<PostPage />} />
      </Route>
      <Route path ="about" element={<AboutPage />} />
    </Route>
  ), {
    future: {
      v7_relativeSplatPath: true
    }
  });
  return router;
}
