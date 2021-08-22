import { rerenderEntireTree } from "../../rerenderEntireTree";

function toggleLike(postId, isLiked) {
  const currentPost = this.posts.filter(({ id }) => id === postId)[0];
  currentPost.like = createLike(isLiked, currentPost.like.count);
  rerenderEntireTree();
}

function createLike(isLiked, prevCount) {
  return {
    isLiked,
    count: prevCount + (isLiked ? 1 : -1),
  };
}

export { toggleLike };
