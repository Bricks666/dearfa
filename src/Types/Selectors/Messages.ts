import { AppState, IMessage } from "../Redux";

export type GetDialogMessages = (
	state: AppState,
	dialogId: number
) => IMessage[];
