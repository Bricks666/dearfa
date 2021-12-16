import React, { FC } from "react";
import { IOnlyClassComponent } from "../../../../Types/Common";

export const LookingJob: FC<IOnlyClassComponent> = ({ className }) => {
	return (
		<div className={className}>
			<dt>Ищет работу:</dt>
			<dd>Нет</dd>
		</div>
	);
};
