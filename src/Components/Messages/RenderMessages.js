import { Message } from "../Message/Message";

export const RenderMessages = (messages, dispatch, className) => {
  return messages.map((message) => {
    return (
      <Message
        className={className}
        author={dispatch({ type: "GET-USER-INFO", id: message.authorId })}
      >
        {message.content.text}
      </Message>
    );
  });
};
