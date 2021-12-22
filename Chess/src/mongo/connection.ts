import Mongoose from 'mongoose'

export async function connect() {
    await Mongoose.connect('mongodb://localhost:27017/chess');
    console.log('Connected to db')
}

export function disconnect() {
    Mongoose.connection.close();
}