import React, { FC } from "react";
import { Routes, Route } from "react-router";
import { News } from "../News";
import { NotFound } from "../NotFound";
import { Profile } from "../Profile";
import { Users } from "../Users";
import { Friends } from "../Friends";
import { Dialogs } from "../Dialogs";
import { Login } from "../Login";
import { Registration } from "../Registration/Registration";
import { IOnlyClassComponent } from "../../Types/Common";

export const Main: FC<IOnlyClassComponent> = ({ className }) => {
	return (
		<Routes>
			<Route path="/profile/:id">
				<Profile className={className} />
			</Route>
			<Route path="/dialogs/:id?">
				<Dialogs className={className} />
			</Route>
			<Route path="/friends/:page">
				<Friends className={className} />
			</Route>
			<Route path="/news">
				<News className={className} />
			</Route>
			<Route path="/login">
				<Login className={className} />
			</Route>
			<Route path="/registration">
				<Registration className={className} />
			</Route>
			<Route path="/users/:page">
				<Users className={className} />
			</Route>
			<Route>
				<NotFound className={className} />
			</Route>
		</Routes>
	);
};
