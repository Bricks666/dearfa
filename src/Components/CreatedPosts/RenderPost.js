import { Post } from "../Post/Post";

export const RenderPost = (posts, toggleLike) => {
  return posts.map((post) => {
    return <Post post={post} toggleLike={toggleLike} key={post.id} />;
  });
};
