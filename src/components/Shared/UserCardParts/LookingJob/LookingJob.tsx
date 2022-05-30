import { StandardProps } from "@/interfaces/components";
import React, { FC } from "react";

export const LookingJob: FC<StandardProps> = ({ className }) => {
	return (
		<div className={className}>
			<dt>Ищет работу:</dt>
			<dd>Нет</dd>
		</div>
	);
};
