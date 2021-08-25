import { Post } from "../Post/Post";

export const RenderPost = (posts, dispatch) => {
  return posts.map((post) => {
    return <Post post={post} dispatch={dispatch} key={post.id} />;
  });
};
