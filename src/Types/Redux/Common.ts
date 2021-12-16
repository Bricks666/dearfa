import { store } from "../../Redux/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import {
	AuthActions,
	DialogsActions,
	FavoriteFriendsActions,
	FriendsActions,
	LoadingsActions,
	LoginActions,
	MessagesActions,
	NavigationActions,
	PostsActions,
	ProfileActions,
	UsersActions,
} from ".";
import { ThunkAction } from "redux-thunk";

export type AppState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export type RootActions =
	| ProfileActions
	| AuthActions
	| DialogsActions
	| MessagesActions
	| UsersActions
	| FriendsActions
	| FavoriteFriendsActions
	| PostsActions
	| LoginActions
	| NavigationActions
	| LoadingsActions;

export type TypedThunk<R> = ThunkAction<
	Promise<R>,
	AppState,
	undefined,
	RootActions
>;
