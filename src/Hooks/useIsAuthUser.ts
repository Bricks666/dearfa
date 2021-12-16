import { useSelector } from "react-redux";
import { authSelectors } from "../Selectors";
import { UseIsAuthUser } from "../Types/Hooks";

export const useIsAuthUser: UseIsAuthUser = (userId) => {
	return useSelector(authSelectors.getId) === +userId;
};
