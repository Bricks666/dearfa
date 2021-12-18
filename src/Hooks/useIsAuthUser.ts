import { useTypedSelector } from ".";
import { authSelectors } from "../Selectors";
import { UseIsAuthUser } from "../Types/Hooks";

export const useIsAuthUser: UseIsAuthUser = (userId) => {
	return useTypedSelector(authSelectors.getId) == userId;
};
