import { Post } from "../Post/Post";

export const RenderPost = (posts) => {
  return posts.map((post) => {
    return <Post data={post} key={post.id} />;
  });
};
