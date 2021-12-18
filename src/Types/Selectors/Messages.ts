import { ID } from "../Common";
import { AppState, IMessage } from "../Redux";

export type GetDialogMessages = (state: AppState, dialogId: ID) => IMessage[];
