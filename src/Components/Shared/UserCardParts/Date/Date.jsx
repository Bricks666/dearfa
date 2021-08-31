import { parseDate } from "./ParseDate";

export const Date = (props) => {
  return (
    <time className={props.className ?? ""} dateTime={props.date}>
      {parseDate(props.date)}
    </time>
  );
};
