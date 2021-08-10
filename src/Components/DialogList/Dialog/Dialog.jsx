import React from "react";
import { NavLink } from "react-router-dom";
import { SubsectionHeader } from "../../SubsectionHeader/SubsectionHeader";
import { Picture } from "../../Picture/Picture";

import DialogStyle from "./Dialog.module.css";

function Dialog(props) {
    return (
        <li className={`${props.className} ${DialogStyle.dialog}`}>
            <NavLink
                to={`/dialogs/${props.id}`}
                className={DialogStyle.link}
                activeClassName={DialogStyle.linkActive}
                aria-label={`чат с ${props.name}`}
            >
                <SubsectionHeader className={`${DialogStyle.fullName}`}>
                    {props.name}
                </SubsectionHeader>
                <Picture
                    className={`${DialogStyle.photo} fake-photo`}
                    oneXSrc="/Images/PhotoCap/PhotoCap"
                    twoXSrc=""
                    alt="Аватарка собеседника"
                />
            </NavLink>
        </li>
    );
}

export { Dialog };
