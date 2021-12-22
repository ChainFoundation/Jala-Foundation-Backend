import Piece from '../pieces/pieces';
import Pawn from '../pieces/chessPieces/pawn';
import King from '../pieces/chessPieces/king';
import Queen from '../pieces/chessPieces/queen';
import Bishop from '../pieces/chessPieces/bishop';
import Knight from '../pieces/chessPieces/knight';
import Rook from '../pieces/chessPieces/rook';

export default class Board {
  gameId: string;
  tiles: Piece[][];

  constructor(gameId: string) {
    this.gameId = gameId;

    this.initEmpty();
    this.initKing();
    this.initQueen();
    this.initBishops();
    this.initKnights();
    this.initRooks();
    this.initPawns();

    console.log('boardInit');
  }

  initEmpty() {
    let file = 0
    let row = 2
    for (row; row <= 5; row++ ){
        for(file; file <= 7; file++){
        this.tiles[file][row] = null
      }
    }

  }

  initPawns() {
    let i=0
    let whites: number = 2;
    let blacks: number = 7;

    for (i; i <= 7; i++) {
      this.tiles[i][whites] = new Pawn('white', this.gameId);
    }

    for (i = 0; i <= 7; i++) {
      this.tiles[i][blacks] = new Pawn('black', this.gameId);
    }
  }

  initKing() {
    let file = 4;
    let whites: number = 2;
    let blacks: number = 8;

    this.tiles[file][whites] = new King('white', this.gameId);
    this.tiles[file][blacks] = new King('black', this.gameId);
  }

  initQueen() {
    let file = 5;
    let whites: number = 2;
    let blacks: number = 8;

    this.tiles[file][whites] = new Queen('white', this.gameId);
    this.tiles[file][blacks] = new Queen('black', this.gameId);
  }

  initBishops() {
    let file1 = 3;
    let file2 = 6;
    let whites: number = 2;
    let blacks: number = 8;

    this.tiles[file1][whites] = new Bishop('white', this.gameId);
    this.tiles[file2][whites] = new Bishop('black', this.gameId);

    this.tiles[file1][blacks] = new Bishop('black', this.gameId);
    this.tiles[file2][blacks] = new Bishop('black', this.gameId);
  }

  initKnights() {
    let file1 = 2;
    let file2 = 7;
    let whites: number = 2;
    let blacks: number = 8;

    this.tiles[file1][whites] = new Knight('white', this.gameId);
    this.tiles[file2][whites] = new Knight('black', this.gameId);

    this.tiles[file1][blacks] = new Knight('black', this.gameId);
    this.tiles[file2][blacks] = new Knight('black', this.gameId);
  }

  initRooks() {
    let file1 = 1;
    let file2 = 8;
    let whites: number = 2;
    let blacks: number = 8;

    this.tiles[file1][whites] = new Rook('white', this.gameId);
    this.tiles[file2][whites] = new Rook('black', this.gameId);

    this.tiles[file1][blacks] = new Rook('black', this.gameId);
    this.tiles[file2][blacks] = new Rook('black', this.gameId);
  }
}
