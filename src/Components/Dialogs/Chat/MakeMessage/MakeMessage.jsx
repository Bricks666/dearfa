import React from "react";
import { Button } from "../../../Shared/Buttons/Button";

import MakeMessageStyle from "./MakeMessage.module.css";

function MakeMessage(props) {
  const addMessage = (evt) => {
    evt.preventDefault();

    props.addMessage();
  };

  const inputMessage = (evt) => {
    evt.preventDefault();

    props.inputMessage(evt.target.value);
  };

  return (
    <form
      className={`${props.className} ${MakeMessageStyle.makeMessage}`}
      onSubmit={addMessage}
    >
      <textarea
        className={MakeMessageStyle.newMessageText}
        placeholder={props.placeholder ?? ""}
        value={props.content?.text ?? ""}
        onChange={inputMessage}
        name="content"
      ></textarea>
      <Button className={MakeMessageStyle.button} type="submit">
        {props.buttonMessage}
      </Button>
    </form>
  );
}

export { MakeMessage };
