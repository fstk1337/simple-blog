import { BlogContent } from "@components/BlogContent";
import { Welcome } from "@components/Welcome";

export const BlogPage = () => {
  return (
    <main>
      <Welcome heading='Recent posts' text='Our recent blog entries' />
      <BlogContent />
    </main>
  );
}
