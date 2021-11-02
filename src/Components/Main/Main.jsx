import React from "react";
import { Switch, Route } from "react-router";
import { News } from "../News/News";
import { NotFound } from "../NotFound/NotFound";
import { UserProfileConnect } from "../User/UserProfileConnect";
import { LoginContainer } from "../Login/LoginContainer";
import { MeContainer } from "../Me/Me";
import { UsersContainer } from "../Users/UsersContainer";
import { FriendsContainer } from "../Friends/FriendsContainer";
import { Registration } from "../Registration/Registration";
import { DialogsConnect } from "../Dialogs/DialogsConnect";

export function Main(props) {
	return (
		<Switch>
			<Route exact path="/profile">
				<MeContainer className={props.className} />
			</Route>
			<Route exact path="/dialogs/:id?">
				<DialogsConnect className={props.className} />
			</Route>
			<Route exact path="/friends/:page">
				<FriendsContainer className={props.className} />
			</Route>
			<Route exact path="/news">
				<News className={props.className} />
			</Route>
			<Route exact path="/login">
				<LoginContainer className={props.className} />
			</Route>
			<Route exact path="/registration">
				<Registration className={props.className} />
			</Route>
			<Route exact path="/users/:page">
				<UsersContainer className={props.className} />
			</Route>
			<Route exact path="/profile/:id">
				<UserProfileConnect className={props.className} />
			</Route>
			<Route>
				<NotFound className={props.className} />
			</Route>
		</Switch>
	);
}
