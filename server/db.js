import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config()

export const connectMongoDB = async () => {
    try {
        mongoose.set('strictQuery', false);

        mongoose.connect(process.env.MONGO_URI_CONNECTION_KEY, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('db connection established')
    } catch (err) {
        console.err(err)
    }
}