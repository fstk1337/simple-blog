import { PostDto } from "@app/api/posts";

export interface PostCardProps {
  card: PostDto;
  isShort?: boolean;
}
