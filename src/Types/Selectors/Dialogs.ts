import { ID } from "../Common";
import { AppState, IDialog } from "../Redux";

export type GetCurrentDialogSelector = (
	state: AppState,
	dialogId: ID
) => IDialog | undefined;

export type CurrentDialogSelector<Response> = (
	currentDialog: IDialog
) => Response;
