import { INavigationItem } from "../Types/Redux";
import { StandardSelector } from "../Types/Selectors";

export const getNavigation: StandardSelector<INavigationItem[]> = (state) => {
	return state.navigation;
};
