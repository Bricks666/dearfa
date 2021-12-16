import React, { FC, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import { Navigation } from "../Components/Navigation";
import { Main } from "../Components/Main";
import { FavoritFriends } from "../Components/FavoritFriends";
import { Header } from "../Components/Header";
import { useAuth, useProfileURL, useIsLogin, useLoading } from "../Hooks";
import classNames from "classnames";

import AppStyle from "./App.module.css";

export const App: FC = () => {
	const LoadingWrapper = useLoading("loadingAuth");
	const isLogin = useIsLogin();
	const { auth } = useAuth();
	const profilePath = useProfileURL();

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
					(<Navigate to={profilePath} replace={true} />)
					{isLogin ? (
						<Navigate to={profilePath} replace={true} />
					) : (
						<Navigate to="/login" replace={true} />
					)}
					<Routes>
						<Route path="/login" />
						<Route>
							<Navigation className={AppStyle.nav} />
							<FavoritFriends className={AppStyle.lastFriends} />
						</Route>
					</Routes>
					<Main className={AppStyle.main} />
				</div>
			</LoadingWrapper>
		</Router>
	);
};
