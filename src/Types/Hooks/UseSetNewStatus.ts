import { FormSubmitHandler } from "../Common";

export type UseSetNewStatus = () => IUseSetNewStatusResponse;

export type SetNewStatus = FormSubmitHandler<INewStatus>;

interface INewStatus {
	status: string;
}

interface IUseSetNewStatusResponse {
	setNewStatus: SetNewStatus;
}
