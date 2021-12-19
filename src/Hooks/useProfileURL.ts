import { useSelector } from "react-redux";
import { navigationSelectors } from "../Selectors";
import { UseProfileURL } from "../Types/Hooks";

export const useProfileURL: UseProfileURL = () => {
	return useSelector(navigationSelectors.getNavigation)[0].path;
};
