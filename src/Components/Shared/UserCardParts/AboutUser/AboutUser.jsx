import React from "react";
import { RenderUserInfo } from "./RenderUserInfo";

import AboutUserStyle from "./AboutUser.module.css";
/*
Сомнительное решение отделить термин с определением в отдельный компонент,
Потому что пришлось выделить все классы для него в отдельный файл, что затрудняет последующее использование
*/
function AboutUser(props) {
  return (
    <dl className={`${props.className ?? ""} ${AboutUserStyle.aboutUser}`}>
      {RenderUserInfo(props.aboutUser ?? [])}
    </dl>
  );
}

export { AboutUser };
