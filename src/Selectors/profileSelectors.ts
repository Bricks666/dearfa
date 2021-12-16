import { IProfileState } from "../Types/Redux";
import { StandardSelector } from "../Types/Selectors";

export const getProfile: StandardSelector<IProfileState> = (state) => {
	return state.profile;
};
