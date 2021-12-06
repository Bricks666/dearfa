import { useSelector } from "react-redux";
import { navigationSelectors } from "../Selectors";

export const useAuthURL = () => {
	return useSelector(navigationSelectors.getNavigation)[0].path;
};
