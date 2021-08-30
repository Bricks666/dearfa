import React from "react";

import SubsectionHeaderStyle from "./SubsectionHeader.module.css";

function SubsectionHeader(props) {
  return (
    <h3 className={`${SubsectionHeaderStyle.header} ${props.className}`}>
      {props.children}
    </h3>
  );
}

export { SubsectionHeader };
