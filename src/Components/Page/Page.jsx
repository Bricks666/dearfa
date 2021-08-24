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
                    navigationItems={props.store.state.navigation}
                />
                <Main
                    className={PageStyle.main}
                    store={props.store}
                />
                <Switch>
                    <Route path={["/login", "/registration"]} />
                    <Route path="">
                        <FavoritFriends
                            className={PageStyle.lastFriends}
                            friends={props.store.state.users[1].friends}
                            getUserInfo={props.store.getUserInfo}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export { Page };
