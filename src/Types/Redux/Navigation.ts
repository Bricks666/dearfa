export interface INavigationItem {
	id: number;
	path: string;
	text: string;
}

export enum NavigationActionTypes {
	UPDATE_PROFILE_URL = "dearFa/navigation/UPDATE_PROFILE_URL",
}

interface IUpdateProfileURLPayload {
	userId: number;
}

interface IUpdateProfileURLAction {
	type: NavigationActionTypes.UPDATE_PROFILE_URL;
	payload: IUpdateProfileURLPayload;
}

export type NavigationActions = IUpdateProfileURLAction;

export type UpdateProfileURLAC = (userId: number) => IUpdateProfileURLAction;
