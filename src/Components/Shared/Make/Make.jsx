import React from "react";
import { Button } from "../Buttons/Button/Button";

import MakeStyle from "./Make.module.css";

function Make(props) {
  const add = (evt) => {
    evt.preventDefault();

    props.add();
  };

  const input = (evt) => {
    evt.preventDefault();

    props.input(evt.target.value);
  };

  return (
    <form className={`${props.className ?? ""} ${MakeStyle.form}`}>
      <textarea
        className={MakeStyle.textarea}
        placeholder={props.placeholder ?? ""}
        value={props.content?.text ?? ""}
        onChange={input}
      />
      <Button className={MakeStyle.button} type="submit" onClick={add}>
        {props.buttonMessage}
      </Button>
    </form>
  );
}

export { Make };
