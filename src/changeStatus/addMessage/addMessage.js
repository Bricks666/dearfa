import { rerenderEntireTree } from "../../rerenderEntireTree";
import { clearField } from "../clearField/clearField";

function addMessage(data, fieldName) {
  const chat = this.chats[0];

  if (chat.messages === undefined) {
    chat.messages = [];
  }

  chat.messages.push(createMessage.bind(this)(data.valueFields.get(fieldName)));

  clearField(data.valueFields, fieldName);

  rerenderEntireTree(data);
}

function createMessage(content) {
  const currentThis = this;
  return {
    authorId: 1,
    id: currentThis.chats[0].messages.length + 1,
    get author() {
      return currentThis.info;
    },
    message: content,
  };
}

export { addMessage };
