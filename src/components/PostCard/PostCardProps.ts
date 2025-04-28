import { PostDto } from "@app/api/post-cards";

export interface PostCardProps {
  card: PostDto;
  isShort?: boolean;
}
