import { EmptyFunction } from ".";
import { IDialog } from "../Redux";

interface IUseDialogsResponse {
	dialogs: IDialog[];
	loadDialogs: EmptyFunction;
}

export type UseDialogsList = () => IUseDialogsResponse;
