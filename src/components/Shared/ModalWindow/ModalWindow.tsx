/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/types';
import { CrossButton } from '../CrossButton/CrossButton';

import styles from './ModalWindow.module.css';

interface ModalWindowProps extends CommonProps {
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
		<div className={styles.wrapper} onClick={close}>
			<div
				className={cn(styles.inner, className)}
				onClick={(e) => e.stopPropagation()}>
				<CrossButton
					/* onClick={close} */
					className={styles.button}
					/* disabled={false} */
					title='Закрыть модальное окно'
				/>
				{children}
			</div>
		</div>
	) : null;
};
