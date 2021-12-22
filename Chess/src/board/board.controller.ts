import Board from "./boardInit.service"

const createBoard = async (gameId: string) => {
    const board = new Board(gameId)
}

export {createBoard}