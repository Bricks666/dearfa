import { Message } from "../Message/Message";

export const RenderMessages = (messages) => {
  return messages.map((message) => {
    return <Message author={message.id}>{message.message}</Message>;
  });
};
