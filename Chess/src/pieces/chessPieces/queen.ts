import Piece from '../pieces';

export default class Queen implements Piece {
  team: string;
  alive: boolean = true;
  gameId: string;

  constructor(team: string, gameId: string) {
    (this.team = team), (this.gameId = gameId);
  }
  
  kill() {
    this.alive = false;
  }

  canMoveTo([newFile, newRow]: [number, number]): boolean {
    return true;
  }
}
