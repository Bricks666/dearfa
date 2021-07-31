import React from "react";
import Picture from "../Picture/Picture";

import MessageStyle from "./Message.module.css";

function Message(props) {
  return (
    <li className={`${props.className ?? ""} ${MessageStyle.message}`}>
      {console.log(MessageStyle)}
      <h5 className={MessageStyle.author}>{props.author}</h5>
      <Picture
        className={`${MessageStyle.photo} fake-photo`}
        oneXSrc="/Images/PhotoCap/PhotoCap"
        alt="Аватарка"
      />
      <p className={MessageStyle.content}>{props.children}</p>
    </li>
  );
}

export default Message;
