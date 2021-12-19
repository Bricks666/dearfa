import { useSelector } from "react-redux";
import { navigationSelectors } from "../Selectors";
import { UseNavigation } from "../Types/Hooks";

export const useNavigation: UseNavigation = () => {
	return useSelector(navigationSelectors.getNavigation);
};
