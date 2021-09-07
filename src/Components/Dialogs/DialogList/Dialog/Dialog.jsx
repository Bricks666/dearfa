import React from "react";
import { NavLink } from "react-router-dom";
import { SubsectionHeader } from "../../../Shared/SubsectionHeader/SubsectionHeader";
import { Picture } from "../../../Shared/Picture/Picture";

import DialogStyle from "./Dialog.module.css";

function Dialog(props) {
  console.log(props);
  return (
    <li className={`${props.className} ${DialogStyle.dialog}`}>
      <NavLink
        to={`/dialogs/${props.id}`}
        className={DialogStyle.link}
        activeClassName={DialogStyle.linkActive}
        aria-label={`чат с ${props.companion.name}`}
      >
        <SubsectionHeader className={`${DialogStyle.fullName}`}>
          {props.companion.name}
        </SubsectionHeader>
        <Picture
          className={`${DialogStyle.photo} fake-photo`}
          oneXSrc={props.companion.photos.large}
          twoXSrc=""
          alt={props.companion.name}
        />
      </NavLink>
    </li>
  );
}

export { Dialog };
