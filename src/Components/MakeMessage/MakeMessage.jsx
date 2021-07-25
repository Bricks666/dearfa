import Button from "../Button/Button";
import MakeMessageStyle from "./MakeMessage.module.css";

function MakeMessage(props) {
  return (
    <form class={`${props.className} ${MakeMessageStyle.makeMessage}`}>
      <textarea
        className={MakeMessageStyle.newMessageText}
        placeholder={props.placeholder}
      ></textarea>
      <Button className={MakeMessageStyle.button} type="submit">
        {props.buttonMessage}
      </Button>
    </form>
  );
}

export default MakeMessage;
