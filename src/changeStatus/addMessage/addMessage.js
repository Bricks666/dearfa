import { rerenderEntireTree } from "../../rerenderEntireTree";
import { clearField } from "../clearField/clearField";

function addMessage(data, fieldName) {
  const chat = this.chats[0];

  if (chat.messages === undefined) {
    chat.messages = [];
  }

  const value = data.valueFields.get(fieldName).value;

  const newMessage = createMessage.bind(this)(value);

  chat.messages.push(newMessage);

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
