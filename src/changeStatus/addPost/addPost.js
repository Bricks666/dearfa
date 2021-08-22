import { rerenderEntireTree } from "../../rerenderEntireTree";
import { clearField } from "../clearField/clearField";

function addPost(data, newPost, fieldName) {
  this.posts.unshift(createPost.bind(this)(newPost));

  clearField(data, fieldName);

  rerenderEntireTree(data);
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
