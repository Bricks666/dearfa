import React from "react";
import { NavLink } from "react-router-dom";
import { SubsectionHeader } from "../../SubsectionHeader/SubsectionHeader";
import { Picture } from "../../Picture/Picture";

import DialogStyle from "./Dialog.module.css";

function Dialog(props) {
    return (
        <li className={`${props.className} ${DialogStyle.dialog}`}>
            <NavLink
                to={`/dialogs/2`}
                className={DialogStyle.link}
                activeClassName={DialogStyle.linkActive}
                aria-label={`чат с кем-то`}
            >
                <SubsectionHeader className={`${DialogStyle.fullName}`}>
                    Кто то
                </SubsectionHeader>
                <Picture
                    className={`${DialogStyle.photo} fake-photo`}
                    oneXSrc={""}
                    twoXSrc=""
                    alt={""}
                />
            </NavLink>
        </li>
    );
}

export { Dialog };
