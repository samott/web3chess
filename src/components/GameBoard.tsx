"use client";

import { useState } from 'react';

import Image, { StaticImageData } from 'next/image';

import BoardCell from '../components/BoardCell';

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

export type Owner = 'white' | 'black';
export type Piece = 'pawn' | 'rook' | 'bishop' | 'knight' | 'king' | 'queen';

export type GamePiece = {
	owner: Owner|null;
	piece: Piece|null;
}

export type GameBoardProps = {
	board: GamePiece[][];
}

type Position = {
	row: number;
	col: number;
};

export default function GameBoard({ board } : GameBoardProps) {
	const [selectedCell, setSelectedCell] = useState<Position>({ row: -1, col: -1 });

	const handleClick = (row: number, col: number) => {
		setSelectedCell(
			current => (current.row == row && current.col == col)
				? { row: -1, col: -1 }
				: { row, col }
		);
	}

	const playerColour : Owner = 'white';

	return (
		<div className={styles.GameBoard}>
			{board.map((row, i) => row.map((cell, j) =>
				<BoardCell
					key={`row${i}col${j}`}
					onClick={() => cell.owner == playerColour && handleClick(i, j)}
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
