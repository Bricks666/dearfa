import { rerenderEntireTree } from "../../rerenderEntireTree";
import { clearField } from "../clearField/clearField";

function addPost(data, fieldName) {
  const newPost = createPost.bind(this)(data.valueFields.get(fieldName));
  this.posts.unshift(newPost);

  clearField(data.valueFields, fieldName);

  rerenderEntireTree(data);
}

function createPost(content) {
  const currentThis = this;
  return {
    id: currentThis.posts.length + 1,
    date: new Date(),
    authorId: 1,
    get author() {
      return currentThis?.info;
    },
    like: {
      count: 0,
      isLiked: false,
    },
    content: content,
  };
}

export { addPost };
