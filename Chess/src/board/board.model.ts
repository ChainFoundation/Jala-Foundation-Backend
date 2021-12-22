import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const gameSchema = new Schema({
    gameId: {
        type: String
    },
    board: {
        tiles: [String]
    }
    })