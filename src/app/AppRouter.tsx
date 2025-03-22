import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "@layout/Layout";
import { BlogPage, HomePage, AboutPage } from "@pages";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path ="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
