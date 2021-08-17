import React from "react";

import AboutUserItemStyle from "./AboutUserItem.module.css";

function AboutUserItem(props) {
    return (
        <div className={AboutUserItemStyle.interlayer}>
            <dt className={AboutUserItemStyle.term}>{props.term}:</dt>
            <dd className={AboutUserItemStyle.description}>
                <a
                    className={`${AboutUserItemStyle.link} ${
                        props.href ? "" : AboutUserItemStyle.link_disable
                    }`}
                    href={props.href ?? ""}
                    target="_blank"
                    rel="noreferrer"
                >
                    {props.description}
                </a>
            </dd>
        </div>
    );
}

export { AboutUserItem };
