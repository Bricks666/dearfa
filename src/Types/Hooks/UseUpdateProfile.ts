import { FormSubmitHandler } from "../Common";

export type UseUpdateProfile = () => IUseUpdateProfileResponse;

/* TODO: передавать нормальный тип, из типа формы */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UpdateProfile = FormSubmitHandler<any>;

interface IUseUpdateProfileResponse {
	updateProfile: UpdateProfile;
}
