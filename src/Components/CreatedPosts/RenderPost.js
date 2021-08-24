import { Post } from "../Post/Post";

export const RenderPost = (posts,getUserInfo, toggleLike) => {
  return posts.map((post) => {
    return <Post post={post} getInfo={getUserInfo} toggleLike={toggleLike} key={post.id} />;
  });
};
