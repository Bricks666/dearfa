import React from "react";
import { NavLink } from "react-router-dom";
import { SubsectionHeader } from "../../SubsectionHeader/SubsectionHeader";
import { Picture } from "../../Picture/Picture";

import DialogStyle from "./Dialog.module.css";

function Dialog(props) {
    return (
        <li className={`${props.className} ${DialogStyle.dialog}`}>
            <NavLink
                to={`/dialogs/${props.author.id}`}
                className={DialogStyle.link}
                activeClassName={DialogStyle.linkActive}
                aria-label={`чат с ${props.author.fullName}`}
            >
                <SubsectionHeader className={`${DialogStyle.fullName}`}>
                    {props.author.fullName}
                </SubsectionHeader>
                <Picture
                    className={`${DialogStyle.photo} fake-photo`}
                    oneXSrc={props.author.avatar.url}
                    twoXSrc=""
                    alt={props.author.avatar.alt}
                />
            </NavLink>
        </li>
    );
}

export { Dialog };
