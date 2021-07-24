import ButtonStyle from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={`${props.className} ${ButtonStyle.button}`}
      type={props.type}
    >
      {props.buttonMessage}
    </button>
  );
}

export default Button;
