import { Message } from "../Message/Message";

export const RenderMessages = (messages, getInfo, className) => {
  return messages.map((message) => {
    return (
      <Message className={className} author={getInfo(message.authorId)}>
        {message.message}
      </Message>
    );
  });
};
