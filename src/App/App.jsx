import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { HeaderContainer } from "../Components/Header/HeaderContainer";
import { NavigationContainer } from "../Components/Navigation/NavigationContainer";
import { MainWithLoading } from "../Components/Main/MainWithLoading";
import { FavoritFriendsContainer } from "../Components/FavoritFriends/FavoritFriendsContainer";
import { withLoading } from "../Components/Shared/withLoading/withLoading";

import AppStyle from "./App.module.css";

const AppWithoutLoading = React.memo((props) => {
	return (
		<Router>
			<div
				className={`${AppStyle.page} ${
					props.isLogin === false && AppStyle.notLoginPage
				}`}
			>
				<h1 className="visibility-hidden">Dear.Fa</h1>
				<HeaderContainer className={AppStyle.header} />

				{/* Оказывается редирект нормально работает только внутри свича */}
				<Switch>
					{props.isLogin ? (
						<Redirect exact from="/login" to="/profile" /> && (
							<Redirect exact from="/" to="profile" />
						)
					) : (
						<Redirect to="/login" />
					)}
				</Switch>

				<Switch>
					<Route path={["/login", "/registration"]} />
					<Route>
						<NavigationContainer className={AppStyle.nav} />
						<FavoritFriendsContainer className={AppStyle.lastFriends} />
					</Route>
				</Switch>

				<MainWithLoading className={AppStyle.main} />
			</div>
		</Router>
	);
});
const AppWithLoading = withLoading(AppWithoutLoading);

export const App = (props) => {
	useEffect(() => {
		props.auth();
	}, []);

	return (
		<AppWithLoading
			{...props}
			className={`${props.className ?? ""} ${AppStyle.loading}`}
		/>
	);
};
