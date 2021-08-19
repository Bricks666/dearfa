import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import { FavoritFriends } from "../FavoritFriends/FavoritFriends";
import { Main } from "../Main/Main";

import PageStyle from "./Page.module.css";

function Page(props) {
    return (
        <Router>
            <div className={PageStyle.page}>
                <h1 className="visibility-hidden">Dear.Fa</h1>
                <Header className={PageStyle.header} />
                <Navigation
                    className={PageStyle.nav}
                    navigationItems={props.data.navigation}
                />
                <Main className={PageStyle.main} data={props.data} />
                <Switch>
                    <Route path={["/login", "/registration"]}></Route>
                    <Route path="">
                        <FavoritFriends
                            className={PageStyle.lastFriends}
                            friends={props.data.users.get(1).friends}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export { Page };
