import { Message } from "./Message/Message";

export const RenderMessages = (messages, className) => {
  return messages.map((message) => {
    return <Message className={className}>{message.content.text}</Message>;
  });
};
