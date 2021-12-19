import classNames from "classnames";
import React, { FC } from "react";
import { IOnlyClassComponent } from "../../Types/Common";

export const EmptyChat: FC<IOnlyClassComponent> = ({ className }) => {
	return (
		<section className={classNames(className)}>
			<p>На данный момент ни один чат не выбран</p>
		</section>
	);
};
