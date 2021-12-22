export default interface Piece {
  team: string;
  alive: boolean;
  gameId: string;

  kill(): void;

  canMoveTo([newFile, newRow]: [number, number]): boolean;
}
