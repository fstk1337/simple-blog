import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "@layout/Layout";
import { BlogPage, HomePage, AboutPage, PostPage } from "@pages";


export const AppRouter = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
}
