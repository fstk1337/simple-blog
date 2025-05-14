import { PostContent } from "@components/PostContent";
import { Welcome } from "@components/Welcome";
import { useParams } from "react-router-dom";

export const PostPage = () => {
  const { id } = useParams();

  return (
    <main>
      <Welcome heading='Cozy post' text='Take your time' />
      {id && <PostContent id={parseInt(id)} />}
    </main>
  );
}
