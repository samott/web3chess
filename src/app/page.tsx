import styles from "./page.module.css";

import GameBoard from '../components/GameBoard';
const board = [
	[
		{ owner: 'black', piece: 'rook' },
		{ owner: 'black', piece: 'knight' },
		{ owner: 'black', piece: 'bishop' },
		{ owner: 'black', piece: 'queen' },
		{ owner: 'black', piece: 'king' },
		{ owner: 'black', piece: 'bishop' },
		{ owner: 'black', piece: 'knight' },
		{ owner: 'black', piece: 'rook' },
	],
	[
		{ owner: 'black', piece: 'pawn' },
		{ owner: 'black', piece: 'pawn' },
		{ owner: 'black', piece: 'pawn' },
		{ owner: 'black', piece: 'pawn' },
		{ owner: 'black', piece: 'pawn' },
		{ owner: 'black', piece: 'pawn' },
		{ owner: 'black', piece: 'pawn' },
		{ owner: 'black', piece: 'pawn' },
	],
	[
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
	],
	[
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
	],
	[
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
	],
	[
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
		{ owner: null, piece: null },
	],
	[
		{ owner: 'white', piece: 'pawn' },
		{ owner: 'white', piece: 'pawn' },
		{ owner: 'white', piece: 'pawn' },
		{ owner: 'white', piece: 'pawn' },
		{ owner: 'white', piece: 'pawn' },
		{ owner: 'white', piece: 'pawn' },
		{ owner: 'white', piece: 'pawn' },
		{ owner: 'white', piece: 'pawn' },
	],
	[
		{ owner: 'white', piece: 'rook' },
		{ owner: 'white', piece: 'knight' },
		{ owner: 'white', piece: 'bishop' },
		{ owner: 'white', piece: 'queen' },
		{ owner: 'white', piece: 'king' },
		{ owner: 'white', piece: 'bishop' },
		{ owner: 'white', piece: 'knight' },
		{ owner: 'white', piece: 'rook' },
	],
];

export default function Home() {
	return (
		<main className={styles.main}>
			<GameBoard board={board} />
		</main>
	);
}
