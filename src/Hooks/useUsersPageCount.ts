import { useTypedSelector } from ".";
import { usersSelectors } from "../Selectors";
import { UsePageCount } from "../Types/Hooks";

export const useUsersPageCount: UsePageCount = () => {
	return useTypedSelector(usersSelectors.getPageCount);
};
