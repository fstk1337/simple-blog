import { BlogContent } from "@components/BlogContent";
import { Welcome } from "@components/Welcome";

export const BlogPage = () => {
  return (
    <main>
      <Welcome heading='Personal blog' text='Thoughts about anything' />
      <BlogContent />
    </main>
  );
}
