"use client";

import { useState } from 'react';

import GameBoard from '../components/GameBoard';

import {
	Owner,
	Position,
	GamePiece,
} from '../types';

const initialBoard : GamePiece[][] = [
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

type LineType =
	| 'NotALine'
	| 'NotClear'
	| 'Row'
	| 'Column'
	| 'Diagonal';

const playerColour: Owner = 'white';

export default function Game() {
	const [board, setBoard] = useState<GamePiece[][]>(initialBoard);

	const updateCell = (board: GamePiece[][], pos: Position, newPiece: GamePiece): GamePiece[][] => {
		return board.toSpliced(
			pos.row,
			1,
			board[pos.row].toSpliced(
				pos.col,
				1,
				newPiece
			)
		);
	}

	const isClearLine = (board: GamePiece[][], from: Position, to: Position): LineType => {
		const distY = Math.abs(from.row - to.row);
		const distX = Math.abs(from.col - to.col);

		if (distY == 0) {
			const startCol = (from.col > to.col)
				? to.col
				: from.col;

			const row = from.row;

			for (let i = 1; i < distX; i++)  {
				if (board[row][startCol + i].owner !== null)
					return 'NotClear';
			}

			return 'Row';
		}

		if (distX == 0) {
			const startRow = (from.row > to.row)
				? to.row
				: from.row;

			const col = from.col;
			for (let i = 1; i < distY; i++) {
				if (board[startRow + i][col].owner !== null)
					return 'NotClear';
			}

			return 'Column';
		}

		if (distX == distY) {
			const startCol = from.col;
			const startRow = from.row;

			for (let i = 1; i < distY; i++) {
				const row = (from.col > to.col) ? startRow + i : startRow - i;
				const col = (from.row > to.row) ? startCol + i : startCol - i;
				console.log(row, col);

				if (board[row][col].owner !== null)
					return 'NotClear';
			}

			return 'Diagonal';
		}

		return 'NotALine';
	}

	const isValidMove = (from: Position, to: Position): boolean => {
		const fromCell = board[from.row][from.col];
		const toCell = board[to.row][to.col];

		const distY = Math.abs(from.row - to.row);
		const distX = Math.abs(from.col - to.col);

		const opponentColour = (playerColour == 'white')
			? 'black' : 'white';

		const isAttacking = toCell.owner == opponentColour;

		if (fromCell.piece == 'knight') {
			if ((distX == 1 && distY == 2) || (distX == 2 && distY == 1))
				return true;
		}

		if (fromCell.piece == 'pawn') {
			const pawnHomeRow = playerColour == 'white' ? 6 : 1;

			if (playerColour == 'white' && to.row > from.row)
				return false;

			if (playerColour == 'black' && to.row < from.row)
				return false;

			if ((distX == 0 && distY == 1)
					|| (distX == 0 && distY == 2 && from.row == pawnHomeRow)
					|| (distX == 1 && distY == 1 && isAttacking))
				return true;
		}

		if (fromCell.piece == 'rook') {
			const lineType = isClearLine(board, from, to);

			if (lineType == 'Row' || lineType == 'Column')
				return true;
		}

		if (fromCell.piece == 'bishop') {
			const lineType = isClearLine(board, from, to);

			if (lineType == 'Diagonal')
				return true;
		}

		if (fromCell.piece == 'queen') {
			const lineType = isClearLine(board, from, to);

			if (lineType != 'NotClear' && lineType != 'NotALine')
				return true;
		}

		if (fromCell.piece == 'king') {
			if (Math.max(distX, distY) == 1)
				return true;
		}

		return false;
	}

	const handleAttemptMove = (from: Position, to: Position) => {
		const fromCell = board[from.row][from.col];

		if (!isValidMove(from, to))
			return;

		setBoard(curr => 
			updateCell(
				updateCell(curr, to, fromCell),
				from,
				{ owner: null, piece: null }
			)
		);
	}

	return (
		<GameBoard
			board={board}
			playerColour={playerColour}
			onAttemptMove={handleAttemptMove}
		/>
	);
}
