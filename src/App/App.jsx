import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { Navigation } from "../Components/Navigation";
import { Main } from "../Components/Main";
import { FavoritFriends } from "../Components/FavoritFriends";
import { Header } from "../Components/Header";
import { useAuth, useAuthURL, useIsLogin, useLoading } from "../Hooks";
import classNames from "classnames";

import AppStyle from "./App.module.css";

export const App = () => {
	const { LoadingWrapper } = useLoading("loadingAuth");
	const isLogin = useIsLogin();
	const { auth } = useAuth();
	const profilePath = useAuthURL();

	useEffect(() => {
		auth();
	}, [auth]);

	return (
		<Router>
			<LoadingWrapper>
				<div
					className={classNames(AppStyle.page, {
						[AppStyle.notLoginPage]: isLogin === false,
					})}
				>
					<h1 className="visibility-hidden">Dear.Fa</h1>
					<Header className={AppStyle.header} />

					<Switch>
						(<Redirect exact from="/" to={profilePath} />)
					</Switch>
					<Switch>
						{isLogin ? (
							<Redirect exact from="/login" to={profilePath} />
						) : (
							<Redirect to="/login" />
						)}
					</Switch>

					<Switch>
						<Route path={["/login", "/registration"]} />
						<Route>
							<Navigation className={AppStyle.nav} />
							<FavoritFriends className={AppStyle.lastFriends} />
						</Route>
					</Switch>

					<Main className={AppStyle.main} />
				</div>
			</LoadingWrapper>
		</Router>
	);
};
