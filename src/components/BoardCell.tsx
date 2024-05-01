import { PropsWithChildren } from 'react';

import styles from '../styles/components/BoardCell.module.css';

type BoardCellProps = PropsWithChildren & {
	onClick: () => void,
	isSelected: boolean,
};

export default function BoardCell({
	onClick,
	isSelected,
	children
}: BoardCellProps) {
	const className = (isSelected)
		? `${styles.BoardCell} ${styles.selected}`
		: styles.BoardCell;

	return (
		<div
			className={className}
			onClick={() => onClick()}>
				{children}
		</div>
	);
}
