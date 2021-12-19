import { useSelector } from "react-redux";
import { loginSelectors } from "../Selectors";
import { UseIsLogin } from "../Types/Hooks";

export const useIsLogin: UseIsLogin = () => {
	return useSelector(loginSelectors.getIsLogin);
};
