import { Router } from 'express';
import * as gameController from '../game/game.controller'
import Board from '../board/boardInit.service';

const index: Router = Router();

index.get('/', (req, res) => {
    res.send('')
  })

index.get('/newGame', gameController.createGame)

export default index

