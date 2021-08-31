import React from "react";

import AboutUserItemStyle from "./AboutUserItem.module.css";

function AboutUserItem(props) {
  return (
    <div className={AboutUserItemStyle.interlayer}>
      <dt className={AboutUserItemStyle.term}>{props.info.term}:</dt>
      <dd className={AboutUserItemStyle.description}>
        <a
          className={`${AboutUserItemStyle.link} ${
            props.info.href ? "" : AboutUserItemStyle.link_disable
          }`}
          href={props.info.href ?? ""}
          target="_blank"
          rel="noreferrer"
        >
          {props.info.description}
        </a>
      </dd>
    </div>
  );
}

export { AboutUserItem };
