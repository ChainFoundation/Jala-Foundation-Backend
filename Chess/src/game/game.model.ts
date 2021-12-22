import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const gameSchema = new Schema(
  {
    gameName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Game = mongoose.model('Game', gameSchema);
export default Game;
