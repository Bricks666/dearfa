import React from "react";
import { Link, NavLink } from "react-router-dom";

import NavigationItemsStyle from "./NavigationItems.module.css";

function NavigationItems(props) {
  return (
    <li className={NavigationItemsStyle.item}>
      <NavLink
        to={props.to}
        className={NavigationItemsStyle.link}
        activeClassName={NavigationItemsStyle.link_currentPage}
      >
        {props.children}
      </NavLink>
    </li>
  );
}

export default NavigationItems;
