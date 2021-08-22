import { rerenderEntireTree } from "../../rerenderEntireTree";

function addMessage(data) {
  if (this.chats[0].messages === undefined) {
    this.chats[0].messages = [];
  }
  this.chats[0].messages.push(createMessage.bind(this)(data));
  rerenderEntireTree();
}

function createMessage({ authorId, content }) {
  const currentThis = this;
  return {
    authorId,
    message: content,
    id: currentThis.chats[0].messages.length + 1,
    get author() {
      return currentThis.info;
    },
  };
}

export { addMessage };
