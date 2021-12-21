import { ChangeEventHandler } from "react";
import { IOnlyClassComponent } from "../../";
import { ILike } from "../../../Redux";

export interface ILikeComponent extends IOnlyClassComponent {
	status: ILike;
	likeHandler: ChangeEventHandler<HTMLInputElement>;
}
