import React, { FC, useEffect } from "react";
import classNames from "classnames";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "../Components/Navigation";
import { FavoritFriends } from "../Components/FavoritFriends";
import { Header } from "../Components/Header";
import { useAuth, useIsLogin, useLoading } from "../Hooks";
import { routes } from "../Routes";

import AppStyle from "./App.module.css";

export const App: FC = () => {
	const { LoadingWrapper } = useLoading("loadingAuth");
	const isLogin = useIsLogin();
	const { auth } = useAuth();

	useEffect(() => {
		auth();
	}, [auth]);

	return (
		<LoadingWrapper>
			<div
				className={classNames(AppStyle.page, {
					[AppStyle.notLoginPage]: isLogin === false,
				})}
			>
				<Header className={AppStyle.header} />
				<Navigation className={AppStyle.nav} />
				<FavoritFriends className={AppStyle.lastFriends} />
				<Routes>
					{routes.map((route) => (
						<Route
							path={route.path}
							element={
								<route.Component className={AppStyle.main} key={route.path} />
							}
							key={route.path}
						/>
					))}
				</Routes>
			</div>
		</LoadingWrapper>
	);
};
