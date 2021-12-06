import { useSelector } from "react-redux";
import { navigationSelectors } from "../Selectors";

export const useNavigation = () => {
	return useSelector(navigationSelectors.getNavigation);
};
