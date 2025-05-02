import { PostContent } from "@components/PostContent";
import { Welcome } from "@components/Welcome";

export const PostPage = () => {
  return (
    <main>
      <Welcome heading='Cozy post' text='Take your time' />
      <PostContent />
    </main>
  );
}
