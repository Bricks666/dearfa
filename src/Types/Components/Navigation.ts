import { IOnlyClassComponent } from ".";

export interface INavigationItemComponent extends IOnlyClassComponent {
	to: string;
	text: string;
}
