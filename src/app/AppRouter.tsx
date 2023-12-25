import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "@layout/Layout";
import { AboutPage, BlogPage, ContactPage, HomePage, PostPage } from "@pages";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
