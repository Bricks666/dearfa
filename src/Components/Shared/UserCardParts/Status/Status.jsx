import StatusStyle from "./Status.module.css";

export const Status = (props) => {
  if (Boolean(props.status) === false) {
    return null;
  }

  return (
    <p className={`${StatusStyle.wrapper} ${props.className ?? ""}`}>
      Статус: <span className={StatusStyle.status}>{props.status}</span>
    </p>
  );
};
