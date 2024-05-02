import { GamePiece, Position } from '../types';

import styles from '../styles/components/MoveHistory.module.css';

export type MoveHistoryItem = {
	from: GamePiece & Position,
	to: GamePiece & Position
};

export type MoveHistoryProps = {
	items: MoveHistoryItem[]
}

export default function MoveHistory({
	items
} : MoveHistoryProps) {
	return (
		<div className={styles.MoveHistory}>
			{ items.map(item => <div className={styles.MoveHistoryItem}>
				<div>
					{item.from.owner} {item.from.piece}:
						({item.from.row}, {item.from.col})
						-&gt; ({item.to.row}, {item.to.col})
				</div>
				{item.to.owner && <div className={styles.CapturedItem}>[capture {item.to.piece}]</div>}
			</div>) }
		</div>
	);
}
