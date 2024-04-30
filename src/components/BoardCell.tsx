import { PropsWithChildren } from 'react';

import styles from '../styles/components/BoardCell.module.css';

type BoardCellProps = PropsWithChildren;

export default function BoardCell({ children }: BoardCellProps) {
	return (
		<div className={styles.BoardCell}>{children}</div>
	);
}
