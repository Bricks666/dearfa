import { useSelector } from "react-redux";
import { loginSelectors } from "../Selectors";

export const useIsLogin = () => {
	return useSelector(loginSelectors.getIsLogin);
};
