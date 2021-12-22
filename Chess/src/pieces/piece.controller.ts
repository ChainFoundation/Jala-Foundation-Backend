import { Request, Response } from 'express';
import Piece from './piece.model';

const createPiece = async (req: Request, res: Response) => {
  try {
    const piece = new Piece(req.body);
    return res.send;
  } catch (err) {
    console.log(err);
  }
};

export { createPiece };
