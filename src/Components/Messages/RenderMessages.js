import { Message } from "../Message/Message";

export const RenderMessages = (messages, className) => {
  return messages.map((message) => {
    return (
      <Message className={className} author={message.author}>
        {message.message}
      </Message>
    );
  });
};
