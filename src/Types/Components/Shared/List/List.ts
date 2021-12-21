import { FC, ReactElement } from "react";
import { IOnlyClassComponent } from "../../";
import { ID } from "../../../Common";

interface IListComponent<T> extends IOnlyClassComponent {
	items: T[];
	Card: FC<T>;
}

export type ListComponent = <T extends { id: ID }>(
	props: IListComponent<T>
) => ReactElement;
