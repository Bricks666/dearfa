import { useTypedSelector } from ".";
import { authSelectors } from "../Selectors";

export const useLogin = () => {
	return useTypedSelector(authSelectors.getLogin);
};
