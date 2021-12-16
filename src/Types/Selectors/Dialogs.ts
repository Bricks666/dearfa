import { AppState, IDialog } from "../Redux";

export type GetCurrentDialogSelector = (
	state: AppState,
	targetDialogId: number
) => IDialog | undefined;

export type CurrentDialogSelector<Response> = (
	currentDialog: IDialog
) => Response;
