import React from "react";
import { Link } from "react-router-dom";

import LogoStyle from "./Logo.module.css";

function Logo(props) {
  return (
    <Link
      className={`${props.className ?? ""} ${LogoStyle.logo}`}
      to="/profile"
    >
      <img
        className={LogoStyle.image ?? ""}
        src={props.src ?? ""}
        alt={props.alt ?? ""}
      />
    </Link>
  );
}

export { Logo };
