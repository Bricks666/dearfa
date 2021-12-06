import { useSelector } from "react-redux";
import { authSelectors } from "../Selectors";

export const useIsAuthUser = (userId) => {
	return useSelector(authSelectors.getId) === +userId;
};
