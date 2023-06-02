import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Blog, Post } from "./pages";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Blog />} />
      <Route path="/post/:id" element={<Post />} />
    </Route>
  </Routes>
);
