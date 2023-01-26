import mongoose from "mongoose";
import "dotenv/config";

    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xqea7mj.mongodb.net/?retryWrites=true&w=majority`)

export default mongoose;