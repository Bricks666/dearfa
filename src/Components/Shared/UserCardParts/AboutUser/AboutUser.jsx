import React from "react";
import { RenderUserInfo } from "./RenderUserInfo";

import AboutUserStyle from "./AboutUser.module.css";

function AboutUser(props) {
  return (
    <dl className={`${props.className ?? ""} ${AboutUserStyle.aboutUser}`}>
      {RenderUserInfo(props.about ?? [])}
    </dl>
  );
}

export { AboutUser };
