"use client";

import { useState } from 'react';

import Image, { StaticImageData } from 'next/image';

import BoardCell from '../components/BoardCell';

import {
	Position,
	Owner,
	Piece,
	GamePiece
} from '../types';

import styles from '../styles/components/GameBoard.module.css';

import whitePawn from '../../public/images/white-pawn.svg';
import whiteKnight from '../../public/images/white-knight.svg';
import whiteRook from '../../public/images/white-rook.svg';
import whiteBishop from '../../public/images/white-bishop.svg';
import whiteKing from '../../public/images/white-king.svg';
import whiteQueen from '../../public/images/white-queen.svg';
import blackPawn from '../../public/images/black-pawn.svg';
import blackKnight from '../../public/images/black-knight.svg';
import blackRook from '../../public/images/black-rook.svg';
import blackBishop from '../../public/images/black-bishop.svg';
import blackKing from '../../public/images/black-king.svg';
import blackQueen from '../../public/images/black-queen.svg';

const imageMap : Record<Owner, Record<Piece, StaticImageData>> = {
	white: {
		pawn: whitePawn,
		knight: whiteKnight,
		rook: whiteRook,
		bishop: whiteBishop,
		king: whiteKing,
		queen: whiteQueen,
	},
	black: {
		pawn: blackPawn,
		knight: blackKnight,
		rook: blackRook,
		bishop: blackBishop,
		king: blackKing,
		queen: blackQueen,
	},
} as const;

export type GameBoardProps = {
	board: GamePiece[][];
	playerColour: Owner;
	onAttemptMove: (from: Position, to: Position) => void;
}
export default function GameBoard({
	board,
	playerColour,
	onAttemptMove,
} : GameBoardProps) {
	const [selectedCell, setSelectedCell] = useState<Position>({ row: -1, col: -1 });

	const handleClick = (row: number, col: number, piece: GamePiece) => {
		if (piece.owner == playerColour) {
			setSelectedCell(
				current => (current.row == row && current.col == col)
					? { row: -1, col: -1 }
					: { row, col }
			);

			return;
		}

		if (selectedCell.row == -1)
			return;

		onAttemptMove(selectedCell, { row, col });
	}

	return (
		<div className={styles.GameBoard}>
			{board.map((row, i) => row.map((cell, j) =>
				<BoardCell
					key={`row${i}col${j}`}
					onClick={() => handleClick(i, j, cell)}
					isSelected={selectedCell.row == i && selectedCell.col == j}
				>
					{(cell.owner && cell.piece)
						&& <Image
								src={imageMap[cell.owner][cell.piece]}
								className={styles.ChessPiece}
								alt={`${cell.owner} ${cell.piece}`}
							/>}
				</BoardCell>
			))}
		</div>
	);
}
