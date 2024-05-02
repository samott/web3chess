export type Position = {
	row: number;
	col: number;
};

export type Owner = 'white' | 'black';
export type Piece = 'pawn' | 'rook' | 'bishop' | 'knight' | 'king' | 'queen';

export type GamePiece = {
	owner: Owner|null;
	piece: Piece|null;
}

