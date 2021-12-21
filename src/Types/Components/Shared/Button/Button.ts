import { MouseEventHandler } from "react";
import { IOnlyClassComponent } from "../../";

type ButtonType = "submit" | "reset" | "button";

export interface IButtonComponent extends IOnlyClassComponent {
	disabled?: boolean;
	type?: ButtonType;
	title?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
