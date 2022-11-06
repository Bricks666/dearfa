/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import React, { FC } from 'react';
import { StandardProps } from '@/interfaces/components';
import { CrossButton } from '../CrossButton/CrossButton';

import ModalWindowStyle from './ModalWindow.module.css';

interface ModalWindowProps extends StandardProps {
	readonly close: VoidFunction;
	readonly condition: boolean;
}

export const ModalWindow: FC<ModalWindowProps> = ({
	className,
	close,
	condition,
	children,
}) => {
	return condition ? (
		<div className={ModalWindowStyle.wrapper} onClick={close}>
			<div
				className={classNames(ModalWindowStyle.inner, className)}
				onClick={(e) => e.stopPropagation()}>
				<CrossButton
					/* onClick={close} */
					className={ModalWindowStyle.button}
					/* disabled={false} */
					title='Закрыть модальное окно'
				/>
				{children}
			</div>
		</div>
	) : null;
};
