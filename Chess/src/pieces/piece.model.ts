import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const pieceSchema = new Schema(
  {
    gameId: {
      type: String,
      required: true,
    },

    piece: {
      type: String,
      required: true,
    },

    file: {
      type: Number,
      required: true,
    },

    row: {
      type: Number,
      required: true,
    },

    alive: {
      type: Boolean,
      required: true,
    },

    team: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Piece = mongoose.model('Piece', pieceSchema);
export default Piece;
