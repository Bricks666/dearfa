import { useSelector } from "react-redux";
import { navigationSelectors } from "../Selectors";

export const useProfileURL = () => {
	return useSelector(navigationSelectors.getNavigation)[0].path;
};
