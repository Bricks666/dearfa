import { rerenderEntireTree } from "../../rerenderEntireTree";

function addPost(data) {
  this.posts.push(createPost.bind(this)(data));
  rerenderEntireTree();
}

function createPost({ authorId, content }) {
  const currentThis = this;
  return {
    id: this.posts.length + 1,
    date: new Date(),
    authorId: authorId,
    get author() {
      return currentThis?.info;
    },
    content: content,
    like: {
      count: 0,
      isLiked: false,
    },
  };
}

export { addPost };
