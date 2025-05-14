import { BlogContent } from "@components/BlogContent";
import { Welcome } from "@components/Welcome";
import { useParams } from "react-router-dom";

export const BlogPage = () => {
  const { categoryId, tagId } = useParams();

  return (
    <main>
      <Welcome heading='Personal blog' text='Thoughts about anything' />
      {categoryId && <BlogContent category={parseInt(categoryId)} />}
      {!categoryId && tagId && <BlogContent tag={parseInt(tagId)} />}
      {!categoryId && !tagId && <BlogContent />}
    </main>
  );
}
