import { Link } from "react-router-dom";

import ButtonLinkStyle from "./ButtonLink.module.css";

export const ButtonLink = (props) => {
  return (
    <Link
      className={`${ButtonLinkStyle.link} ${props.className ?? ""}`}
      to={props.to}
    >
      {props.children}
    </Link>
  );
};
