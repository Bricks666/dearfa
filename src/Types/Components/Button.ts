import { IOnlyClassComponent } from ".";
import { EventHandler } from "../Common";

type ButtonType = "submit" | "reset" | "button";

export interface IButtonComponent extends IOnlyClassComponent {
	disabled?: boolean;
	type?: ButtonType;
	title?: string;
	onClick?: EventHandler<HTMLButtonElement, MouseEvent>;
}
