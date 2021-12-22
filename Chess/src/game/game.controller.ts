import { Request, Response } from 'express';
import Game from './game.model';
import { createBoard } from '../board/board.controller';

const createGame = async (req: Request, res: Response) => {
  const game = new Game(req.body);
  const results = await game.save();
  const board = createBoard(results._id)
  res.send(results + 'game\n');

  return board;
};


const movePiece = async(req: Request, res: Response) => {

}
export { createGame, movePiece };
