import React from "react";
import { RenderNavigation } from "./RenderNavigation";

import NavigationStyle from "./Navigation.module.css";

function Navigation(props) {
    return (
        <nav
            className={`${props.className ?? ""} ${NavigationStyle.navigation}`}
        >
            <ul className={NavigationStyle.list}>
                {RenderNavigation(props.navigationItems)}
            </ul>
        </nav>
    );
}

export { Navigation };
