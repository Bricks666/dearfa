import React from "react";
import { AboutUser } from "../UserCardParts/AboutUser/AboutUser";
import { FullName } from "../UserCardParts/FullName/FullName";
import { Photo } from "../UserCardParts/Photo/Photo";

import UsersListItemPartStyle from "./UsersListItemPart.module.css";

function UsersListItemPart(props) {
  return (
    /*
    Может стоит избавиться от div'а и возвращать фрагмент
    */
    <div
      className={`${UsersListItemPartStyle.item}
             ${props.className ?? ""}`}
    >
      <FullName id={props.user.id} fullName={props.user.fullName} />
      <Photo
        className={UsersListItemPartStyle.photo}
        id={props.user.id}
        fullName={props.user.fullName}
        image={props.user.avatar}
      />

      <AboutUser
        className={UsersListItemPartStyle.aboutUser}
        aboutUser={props.user.about}
      />
    </div>
  );
}

export { UsersListItemPart };
